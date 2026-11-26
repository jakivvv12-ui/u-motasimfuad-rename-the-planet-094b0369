import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryText =
  "Mars is now Rusty McDustface, because it spent four billion years collecting red dust and never once asked for a mop.";

if (entryText.includes("\n") || entryText.length < 1 || entryText.length > 200) {
  throw new Error("entry must be a single line of 1-200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryText + "\n", "utf8");
