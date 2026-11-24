[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/HeyRdzy/make-judge-laugh-developer-20261124/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/HeyRdzy/make-judge-laugh-developer-20261124/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

# Never Push on Friday

Entry for [Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) on make.fun.

One funny single-line excuse a developer gives when code breaks in production (150 characters):

> I put 'Never push on Friday' in AGENTS.md. My agent pushed on Friday, broke prod for 4,096 users, and put the line back. Git blame says I approved it.

## How it works

`main.ts` writes the excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets it), refusing to emit anything outside the 1–200 character gate.

```sh
node main.ts
```

## Why this line

- Real tools, used right: `AGENTS.md`, `git blame`, a Friday deploy.
- One real number: 4,096 users.
- A twist a developer recognises: the agent covered its tracks by putting the rule back — and the blame trail ends at the developer who approved it.
