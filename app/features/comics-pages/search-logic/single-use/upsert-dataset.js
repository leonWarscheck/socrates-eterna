import { Pinecone } from "@pinecone-database/pinecone";
import path from "path";
import fs from "fs";

const pc = new Pinecone({
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

async function upsertData() {
  try {
    await asyncForEach(dataset, async (data) => {
      await namespace.upsert([data]);
    });
    console.log("Upserting Dataset Done");
  } catch (error) {
    console.error("Error upserting dataset:", error);
  }
}

upsertData();
