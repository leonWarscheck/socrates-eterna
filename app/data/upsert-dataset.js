import { Pinecone } from "@pinecone-database/pinecone";
import path from "path";
import fs from "fs";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
const index = pc.index("socrates-search");
const namespace = index.namespace("socrates-namespace");
// const upsertFunc = index.namespace("poc-dataset").upsert;

const filePath = path.resolve("../data/comic-Data.json");
const dataset = JSON.parse(fs.readFileSync(filePath, "utf8"));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

// await asyncForEach(dataset, upsertFunc).then(() =>
//   console.log("Upserting Dataset Done")
// );
async function upsertData() {
  try {
    await asyncForEach(dataset, async (data) => {
      await namespace.upsert([data]); // Wrap data in an array
    });
    console.log("Upserting Dataset Done");
  } catch (error) {
    console.error("Error upserting dataset:", error);
  }
}

upsertData();
