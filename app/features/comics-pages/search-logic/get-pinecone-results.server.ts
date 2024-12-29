import { Pinecone } from "@pinecone-database/pinecone";
import invariant from "tiny-invariant";

import { ComicMatchMetadata } from "../types";
import { getCleanResults } from "./search-helpers.server";

const { PINECONE_API_KEY } = process.env;

// Ensures value exists on running the app. Typescript cannot check environment
// variables so it would always throw a type error without this measure.
invariant(PINECONE_API_KEY, "PINECONE API KEY is required");

const pc = new Pinecone({ apiKey: PINECONE_API_KEY });

const index = pc.index<ComicMatchMetadata>("socrates-search");
const namespace = index.namespace("socrates-namespace");

/**
 * Sends vectorized query to Pinecone DB, which compares it to the embeddings of
 * the comic data we upserted. It then returns a set amount of the closest
 * matching comics.
 */
export async function getPineconeResults(queryEmbeddings: number[]) {
  const queryResponse = await namespace.query({
    topK: 3,
    vector: queryEmbeddings,
    includeMetadata: true,
    includeValues: false,
  });

  const cleanResponse = getCleanResults(queryResponse.matches);

  return cleanResponse;
}
