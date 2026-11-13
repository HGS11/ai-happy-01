import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const programDirectory = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(programDirectory, "entry.png");
const outputDirectory =
  process.env.MAKEFUN_OUTPUT_DIR === undefined
    ? "/output"
    : process.env.MAKEFUN_OUTPUT_DIR;
const outputPath = resolve(outputDirectory, "entry.png");

await mkdir(outputDirectory, { recursive: true });
await copyFile(inputPath, outputPath);
