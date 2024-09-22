import { getQueryEmbeddings } from "./getQueryEmbeddings";
import { getPineconeResults } from "./getPineconeResults";

export async function semanticSearch(query: string) {
  const queryEmbeddings = await getQueryEmbeddings(query);
  const results = await getPineconeResults(queryEmbeddings);
  return results;
}
