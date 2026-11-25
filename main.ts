// The 3 AM Excuse — make.fun entry program.
// Writes exactly one line to /output/entry.txt: a hardware wallet's excuse
// for refusing to sign a transaction at 3 AM.
// The joke: the wallet presents a doctor's note — a fresh angle (not
// batteries, firmware, or cold storage), in the device's own voice, with
// the 3 AM hour itself as the punchline.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate: sealed scorer requires 1-200 UTF-8 chars, not only whitespace.
const LINE =
  "Doctor's note: this wallet is excused from all signatures until sunrise, due to acute exposure to your 3 AM ideas.";

const MAX_CHARS = 200;
const MAX_WORDS = 20;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate is 1-${MAX_CHARS}`);
}
const words = LINE.trim().split(/\s+/).length;
if (words > MAX_WORDS) {
  throw new Error(`line is ${words} words, cap is ${MAX_WORDS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
