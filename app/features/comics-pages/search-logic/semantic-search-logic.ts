import { getPineconeResults } from "./get-pinecone-results.server";
import { getQueryEmbeddings } from "./get-query-embeddings.server";

// The core search engine used inside the search-helpers in the loaders of
// `results.meaning` and `results.character`. Works for both search types,
// because character names are part of the comic scripts at
// `comic.metadata.content`, where the embeddings have been generated from. 
export async function semanticSearch(query: string) {

  // Sends query to OpenAI embeddings API, which converts the query into an
  // embedding/ vector and returns it.
  const queryEmbeddings = await getQueryEmbeddings(query);

  // Sends vectorized query to Pinecone DB, which compares it to the embeddings
  // of the comic data we upserted. It then returns a set number of the closest
  // matching comics.
  const results = await getPineconeResults(queryEmbeddings);
  return results;
}
