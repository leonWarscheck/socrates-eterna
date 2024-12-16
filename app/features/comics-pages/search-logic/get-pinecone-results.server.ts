import { Pinecone } from "@pinecone-database/pinecone";
import invariant from "tiny-invariant";

import { ComicMatchMetadata } from "../types";
import { getCleanResults } from "./search-helpers.server";

const { PINECONE_API_KEY } = process.env;

invariant(PINECONE_API_KEY, "PINECONE API KEY is required");

const pc = new Pinecone({ apiKey: PINECONE_API_KEY });

const index = pc.index<ComicMatchMetadata>("socrates-search");
const namespace = index.namespace("socrates-namespace");

export async function getPineconeResults(queryEmbeddings: number[]) {
  const queryResponse = (
    await namespace.query({
      topK: 3,
      vector: queryEmbeddings,
      includeMetadata: true,
      includeValues: false,
    })
  ).matches;

  const cleanResponse = getCleanResults(queryResponse);

  return cleanResponse;
}
