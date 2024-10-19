import fs from "fs";
import path from "path";
import OpenAI from "openai";

const filePath = path.resolve("../../data/comic-data.json");
const OPENAI_API_KEY =
  "sk-proj-ODL4ukNk3dW0mkygmbLfT3BlbkFJBip53QMdS78DUTjTfhoC";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  project: "proj_Ob5R64Ai0u4futQmHQe7P8xp",
  organization: "org-jRQ76nlnndQiu2Oyzq5jxe8p",
});

async function createEmbeddings(content) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: content,
    encoding_format: "float",
  });

  return response.data[0].embedding;
}

async function processComics() {
  const comicData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  for (let comic of comicData) {
    const content = comic.metadata.content;
    const embedding = await createEmbeddings(content);
    comic.values = embedding;
  }

  fs.writeFileSync(filePath, JSON.stringify(comicData, null, 2));

  console.log("Processed embeddings for: " + filePath.toString());
}

processComics().catch(console.error);
