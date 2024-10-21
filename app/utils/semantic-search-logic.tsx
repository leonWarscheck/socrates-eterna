import { getQueryEmbeddings } from "./get-query-embeddings.server";
import { getPineconeResults } from "./get-pinecone-results.server";

export async function semanticSearch(query: string) {
  const queryEmbeddings = await getQueryEmbeddings(query);
  const results = await getPineconeResults(queryEmbeddings);
  return results;
}
