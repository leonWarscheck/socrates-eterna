import { Pinecone } from "@pinecone-database/pinecone";
import { getCleanResults } from "./date-search-logic";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY,});

const index = pc.index("socrates-search");
const namespace = index.namespace("socrates-namespace");

export async function getPineconeResults(queryEmbeddings) {
  const queryResponse = (
    await namespace.query({
      topK: 3,
      vector: queryEmbeddings,
      includeMetadata: true,
      includeValues: false,
    })
  ).matches;

  const cleanResponse = getCleanResults(queryResponse)

  return cleanResponse;
}
