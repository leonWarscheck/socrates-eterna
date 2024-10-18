import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the original keywords from the file
const keywordsPath = path.join(__dirname, "keywords.txt");
const keywordsString = fs.readFileSync(keywordsPath, "utf8");

// Step 1: Split the keywords string by new lines
const keywordsArray = keywordsString
  .split("\n")
  .map((keyword) => keyword.trim());

// Step 2: Convert the array to a string with quotes
const formattedKeywords = keywordsArray
  .map((keyword) => `"${keyword}"`)
  .join(",\n");

// Step 3: Wrap the formatted keywords in an array syntax
const output = `export const keywords = [\n${formattedKeywords}\n];`;

// Write the output to the keywords.ts file
const outputPath = path.join(__dirname, "keywords.ts");
fs.writeFileSync(outputPath, output);

console.log("keywords.ts file has been created successfully.");
