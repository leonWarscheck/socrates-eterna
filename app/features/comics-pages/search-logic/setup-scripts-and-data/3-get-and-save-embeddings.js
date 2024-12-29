/* eslint-disable */
import fs from "node:fs";
import path from "node:path";

import openai from "openai";

// Sends `comic.metadata.content` (containing comic scripts and character names)
// of all comic data objects to OpenAI embeddings API. Then returns the
// embeddings/ vector data and writes it into the local `comic-data.json` at
// `comic.values`.

const filePath = path.resolve("../../data/comic-data.json");

const openaiClient = new openai({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY,
  project: "proj_Ob5R64Ai0u4futQmHQe7P8xp",
  organization: "org-jRQ76nlnndQiu2Oyzq5jxe8p",
});

async function createEmbeddings(content) {
  const response = await openaiClient.embeddings.create({
    model: "text-embedding-ada-002",
    input: content,
    encoding_format: "float",
  });

  return response.data[0].embedding;
}

try {
  const comicData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  for (let comic of comicData) {
    const content = comic.metadata.content;
    const embedding = await createEmbeddings(content);
    comic.values = embedding;
  }

  fs.writeFileSync(filePath, JSON.stringify(comicData, null, 2));

  console.log("Processed embeddings for: " + filePath.toString());
} catch (error) {
  console.error(error);
}
