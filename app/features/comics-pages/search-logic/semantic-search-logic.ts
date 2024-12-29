import { getPineconeResults } from "./get-pinecone-results.server";
import { getQueryEmbeddings } from "./get-query-embeddings.server";

/**
 * The core search engine used inside the search-helpers in the loaders of
 * `results.meaning` and `results.character`.
 *
 * Works for both search types, because character names are part of the comic
 * scripts at `comic.metadata.content`, from which the embeddings have been
 * generated.
 */
export async function semanticSearch(query: string) {
  const queryEmbeddings = await getQueryEmbeddings(query);

  const results = await getPineconeResults(queryEmbeddings);
  return results;
}
