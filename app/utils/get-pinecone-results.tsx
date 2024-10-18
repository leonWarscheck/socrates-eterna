import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({ apiKey: "77c91cfa-38e5-4acd-8000-ada86d4066f7" });

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

  return queryResponse;
}
