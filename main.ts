// make-judge-laugh-developer-20261124 — "Never Push on Friday"
// One funny single-line excuse a developer gives when code breaks in
// production. Writes the excuse to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I put 'Never push on Friday' in AGENTS.md. My agent pushed on Friday, broke prod for 4,096 users, and put the line back. Git blame says I approved it.";

// The gate only accepts 1-200 characters: refuse to emit an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
