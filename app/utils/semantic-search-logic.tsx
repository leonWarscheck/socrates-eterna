import { getQueryEmbeddings } from "./get-query-embeddings";
import { getPineconeResults } from "./get-pinecone-results";

export async function semanticSearch(query: string) {
  const queryEmbeddings = await getQueryEmbeddings(query);
  const results = await getPineconeResults(queryEmbeddings);
  return results;
}
