# Intent Driven Flow (IDF)

**A delivery framework for teams building software with AI agents.**

Traditional agile was built for human bandwidth. IDF is not. Agents handle execution — breaking down intent, writing code, running tests. Humans set direction, maintain the system's memory, and approve what ships.

## View the framework

**[Live site →](https://rfranco-br.github.io/Intent-Driven-Flow/)**

The site hosts every version of the framework. Start with the latest.

## What's in this repo

| File / Directory | Purpose |
|---|---|
| `idf-vN.html` / `idf-vN.M.html` | Self-contained framework versions |
| `playbook.html` | Opinionated practices and artifact templates |
| `index.html` | Version index (landing page) |
| `nav.js` | Shared navigation bar |
| `versions.json` | Version registry — source of truth for the index |
| `new-version.sh` | Promotes current version to a new major version |

## Versioning

IDF uses a two-level version scheme:

- **Major versions** (`v1`, `v2`, … `v7`) — significant structural or conceptual changes
- **Subversions** (`v7.1`, `v7.11`) — incremental improvements within a major

Each version is a fully self-contained HTML file. All versions remain accessible — nothing is deleted. The `versions.json` registry drives the index page.

Git tags track each framework version: `v1.0`, `v2.0`, `v7.11`, etc.

## Contributing

Contributions are welcome. Please read the framework before proposing changes — IDF has strong internal consistency requirements.

**Content changes** (framework text, principles, roles, artifacts): open an issue first to discuss. Changes must not contradict existing axioms without explicit intent.

**Technical changes** (HTML, CSS, JS, tooling): PRs welcome. Match the existing code style — no build step, no external dependencies, self-contained pages.

Branch off `develop`, not `main`.

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)

You are free to use, share, and adapt this framework for any purpose, including commercially, as long as you give appropriate credit.
