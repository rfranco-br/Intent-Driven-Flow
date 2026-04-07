# Agent Teams — Master Reference Guide

> Claude Code v2.1.32+ required. Enable with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`.
> Source: https://code.claude.com/docs/en/agent-teams

---

## What Are Agent Teams

Multiple Claude Code instances working together. One session is the **team lead** — it creates the team, spawns teammates, assigns tasks, and synthesizes results. Each **teammate** is a fully independent Claude Code session with its own context window.

Unlike subagents (which only report back to the caller), teammates can message each other directly and coordinate through a shared task list.

---

## Enable

In `settings.json` or `settings.local.json`:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

Or as an env var: `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`

---

## Subagents vs Agent Teams

| | Subagents | Agent Teams |
|---|---|---|
| **Context** | Own window; results return to caller | Own window; fully independent |
| **Communication** | Report to main agent only | Teammates message each other directly |
| **Coordination** | Main agent manages all work | Shared task list, self-coordination |
| **Best for** | Focused tasks where only result matters | Work requiring discussion and collaboration |
| **Token cost** | Lower | Higher (each teammate = separate Claude instance) |

**Rule of thumb:** use subagents when you need quick focused workers. Use agent teams when teammates need to share findings, challenge each other, or coordinate independently.

---

## Architecture

| Component | Role |
|---|---|
| **Team lead** | Main session — creates team, spawns teammates, coordinates |
| **Teammates** | Separate Claude Code instances working on assigned tasks |
| **Task list** | Shared work items that teammates claim and complete |
| **Mailbox** | Messaging system between agents |

**Storage (local only):**
- Team config: `~/.claude/teams/{team-name}/config.json`
- Task list: `~/.claude/tasks/{team-name}/`

> Do not hand-edit `config.json` — it's overwritten on every state update.

---

## Starting a Team

Tell Claude what you want in natural language:

```
Create an agent team to explore this CLI tool idea from different angles:
one teammate on UX, one on technical architecture, one as devil's advocate.
```

Claude creates the team, spawns teammates, coordinates work, and cleans up when done. You can also ask Claude to create a team explicitly or let it propose one when the task warrants it.

---

## Display Modes

| Mode | How it works | Requires |
|---|---|---|
| **in-process** (default) | All teammates in one terminal. Shift+Down to cycle. | Nothing |
| **split-pane** | Each teammate in its own pane. | tmux or iTerm2 |

Set globally in `~/.claude.json`:
```json
{ "teammateMode": "in-process" }
```

Force for one session:
```bash
claude --teammate-mode in-process
```

**Split-pane notes:**
- tmux: install via package manager
- iTerm2: install `it2` CLI + enable Python API in preferences
- Not supported in VS Code terminal, Windows Terminal, or Ghostty

---

## Controlling a Team

### Specify teammates and models
```
Create a team with 4 teammates. Use Sonnet for each.
```

### Require plan approval before implementation
```
Spawn an architect teammate to refactor the auth module.
Require plan approval before they make any changes.
```
Lead reviews → approves or rejects with feedback → teammate iterates or proceeds.

### Talk to a teammate directly
- **In-process:** Shift+Down to cycle, type to message, Enter to view session, Escape to interrupt, Ctrl+T to toggle task list
- **Split-pane:** click into the pane

### Task assignment
- **Lead assigns:** tell the lead which task goes to which teammate
- **Self-claim:** teammates pick up the next unassigned, unblocked task automatically after finishing

Task claiming uses file locking to prevent race conditions.

### Shut down a teammate
```
Ask the researcher teammate to shut down
```
Lead sends shutdown request → teammate approves (exits) or rejects with reason.

### Clean up the team
```
Clean up the team
```
Always clean up via the lead, never from a teammate. Lead checks for active teammates and fails if any are still running — shut them down first.

---

## Context and Communication

Teammates load on spawn:
- Project `CLAUDE.md`
- MCP servers and skills (from project and user settings)
- The spawn prompt from the lead

They do **not** inherit the lead's conversation history.

### Messaging
- `message` — send to one specific teammate by name
- `broadcast` — send to all teammates (use sparingly — costs scale linearly)

### Auto-delivery
Messages are delivered automatically. Lead does not need to poll. Teammates notify the lead when they go idle.

---

## Permissions

Teammates inherit the lead's permission settings at spawn time. If lead uses `--dangerously-skip-permissions`, all teammates do too. Individual modes can be changed after spawning, but not at spawn time.

---

## Subagent Definitions as Teammate Types

Define reusable roles as subagent definitions (project, user, plugin, or CLI-defined scope):

```
Spawn a teammate using the security-reviewer agent type to audit the auth module.
```

- The definition's `tools` allowlist and `model` are honored
- The definition body is **appended** to the teammate's system prompt (does not replace it)
- `SendMessage` and task tools are always available to teammates regardless of `tools` restriction
- `skills` and `mcpServers` frontmatter fields are **not** applied when running as a teammate

---

## Quality Gates via Hooks

| Hook | Trigger | Exit 2 effect |
|---|---|---|
| `TeammateIdle` | Teammate about to go idle | Keep teammate working with feedback |
| `TaskCreated` | Task being created | Prevent creation, send feedback |
| `TaskCompleted` | Task being marked complete | Prevent completion, send feedback |

---

## Best Practices

### Team size
- **Start with 3–5 teammates** for most workflows
- **5–6 tasks per teammate** keeps everyone productive
- Scale up only when work genuinely benefits from simultaneity
- Three focused teammates often outperform five scattered ones

### Task sizing
- Too small → coordination overhead exceeds benefit
- Too large → teammates work too long without check-ins
- Just right → self-contained unit with a clear deliverable (a function, a test file, a review)

### Context
Always include task-specific details in the spawn prompt — teammates don't inherit conversation history:
```
Spawn a security reviewer teammate with: "Review src/auth/ for vulnerabilities.
Focus on token handling, session management, input validation. App uses JWT in
httpOnly cookies. Report issues with severity ratings."
```

### Avoid file conflicts
Two teammates editing the same file → overwrites. Give each teammate ownership of different files.

### Monitor and steer
Check progress regularly. Redirect approaches that aren't working. Don't let a team run unattended too long.

### If lead starts doing work instead of delegating
```
Wait for your teammates to complete their tasks before proceeding
```

### Start with research/review if new to agent teams
Review a PR, research a library, investigate a bug — clear boundaries, no parallel write conflicts.

---

## Strong Use Cases

| Use case | Why teams win |
|---|---|
| **Parallel code review** | Security, performance, test coverage reviewed simultaneously with dedicated focus |
| **Competing hypotheses debugging** | Multiple investigators actively try to disprove each other — surviving theory is more likely correct |
| **New modules / features** | Teammates each own a separate piece without stepping on each other |
| **Cross-layer work** | Frontend, backend, and tests each owned by a different teammate |

### When NOT to use agent teams
- Sequential tasks
- Same-file edits
- Work with many interdependencies
- Routine tasks (single session is more cost-effective)

---

## Token Cost

Each teammate is a separate Claude instance with its own context window. Cost scales linearly with active teammates. For research/review/new features, the extra tokens are usually worthwhile. For routine tasks, use a single session.

---

## Limitations (Experimental)

| Limitation | Details |
|---|---|
| No session resumption | `/resume` and `/rewind` don't restore in-process teammates. Spawn new ones after resuming. |
| Task status can lag | Teammates sometimes fail to mark tasks complete. Check manually and nudge if stuck. |
| Slow shutdown | Teammates finish their current request before shutting down. |
| One team per session | Clean up before starting a new team. |
| No nested teams | Teammates cannot spawn their own teams or teammates. |
| Lead is fixed | Can't promote a teammate to lead or transfer leadership. |
| Permissions set at spawn | Can't set per-teammate modes at spawn time (only after). |
| Split panes limited | Not supported in VS Code, Windows Terminal, or Ghostty. |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Teammates not appearing | Press Shift+Down to check; verify task complexity; check tmux is in PATH |
| Too many permission prompts | Pre-approve common operations in permission settings before spawning |
| Teammate stopped on error | Check output via Shift+Down, give direct instructions or spawn replacement |
| Lead shuts down too early | Tell lead to keep going; instruct it to wait for teammates before proceeding |
| Orphaned tmux session | `tmux ls` then `tmux kill-session -t <name>` |

---

## Quick Reference — Prompts That Work

```
# Basic team
Create an agent team with 3 teammates to [task].

# Named teammates for later reference
Create a team with teammates named researcher, implementer, and reviewer.

# Specify models
Create a team with 4 teammates. Use Sonnet for each.

# Plan approval
Spawn an architect teammate. Require plan approval before any changes.

# Parallel review
Create an agent team to review PR #142. Three reviewers:
- Security implications
- Performance impact
- Test coverage

# Competing hypotheses
Spawn 5 teammates to investigate [bug]. Have them debate each other's theories.
Update findings doc with consensus.

# Delegate, don't implement
Wait for your teammates to complete their tasks before proceeding.

# Shutdown
Ask the [name] teammate to shut down.

# Cleanup
Clean up the team.
```

---

## IDF Project Notes

- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` is set in `.claude/settings.local.json`
- Use agent teams for: parallel section reviews, multi-section content changes, research + implementation splits
- Teammate definitions live in `.claude/skills/` — reference by skill name when spawning
- Always clean up teams when done to avoid orphaned tasks in `~/.claude/tasks/`
