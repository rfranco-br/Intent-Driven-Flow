#!/usr/bin/env python3
"""Rebuild MANUSCRIPT.md from the chapter files. Run after editing any chapter."""
import re, glob

ORDER = ['ch00','ch01','ch02','ch03','ch04','ch05','ch06','ch07',
         'ch08','ch09','ch10','ch11','ch12','ch13']
PARTS = {'ch01':'PART I: THE GROUND MOVED',
         'ch02':"PART II: DECIDE WHAT'S WORTH BUILDING",
         'ch04':'PART III: SHIP WITHOUT BATCHING',
         'ch06':'PART IV: GOVERN THE JUDGMENT',
         'ch09':'PART V: LEAD THE CHANGE'}
FRONT = open('_front-matter.md', encoding='utf-8').read()

files = {f[:4]: f for f in glob.glob('ch*.md') if 'voice-test' not in f}
out, total = [FRONT], 0
for o in ORDER:
    f = files.get(o)
    if not f:
        print(f"  WARNING: {o} missing"); continue
    t = re.sub(r'^\*Draft \d.*?\*\n', '', open(f, encoding='utf-8').read(), flags=re.M).strip()
    total += len(t.split())
    if o in PARTS:
        out.append(f"\n\n<br>\n\n# {PARTS[o]}\n\n---\n")
    out.append("\n\n" + t + "\n\n---\n")

open('MANUSCRIPT.md', 'w', encoding='utf-8').write(''.join(out))
print(f"MANUSCRIPT.md rebuilt — {total:,} words, ~{total/230:.0f} min read")
