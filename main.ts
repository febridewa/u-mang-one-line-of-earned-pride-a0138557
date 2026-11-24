// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes one original line of quiet, earned pride to /output/entry.txt.
// The line: a boy who still couldn't read at nine reads the bedtime story
// to his little sister — the stumbles rise once, then twice, then vanish
// inside the line itself, and the pride lands on the last words, never
// asserted, only shown.
// Deterministic: the same fixed string on every run.
// One sentence, 129 characters — inside the gate's 1–240 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The boy who still couldn't read at nine read the bedtime story to his little sister, stumbling once, then twice, then not at all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
