import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keywordsPath = path.join(__dirname, "keywords.txt");
const keywordsString = fs.readFileSync(keywordsPath, "utf8");

const keywordsArray = keywordsString
  .split("\n")
  .map((keyword) => keyword.trim());

const formattedKeywords = keywordsArray
  .map((keyword) => `"${keyword}"`)
  .join(",\n");

const output = `export const keywords = [\n${formattedKeywords}\n];`;

const outputPath = path.join(__dirname, "keywords.ts");
fs.writeFileSync(outputPath, output);

console.log("keywords.ts file has been created successfully.");
