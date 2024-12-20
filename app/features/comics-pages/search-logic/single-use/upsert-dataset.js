import fs from "node:fs";
import path from "node:path";

import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  // eslint-disable-next-line no-undef
  apiKey: process.env.PINECONE_API_KEY,
});
const index = pc.index("socrates-search");
const namespace = index.namespace("socrates-namespace");

const filePath = path.resolve("../data/comic-Data.json");
const dataset = JSON.parse(fs.readFileSync(filePath, "utf8"));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

try {
  await asyncForEach(dataset, async (data) => {
    await namespace.upsert([data]);
  });
  console.log("Upserting Dataset Done");
} catch (error) {
  console.error("Error upserting dataset:", error);
}
