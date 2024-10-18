import OpenAI from "openai";

const OPENAI_API_KEY =
  "sk-proj-ODL4ukNk3dW0mkygmbLfT3BlbkFJBip53QMdS78DUTjTfhoC";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  project: "proj_Ob5R64Ai0u4futQmHQe7P8xp",
  organization: "org-jRQ76nlnndQiu2Oyzq5jxe8p",
});

export async function getQueryEmbeddings(query: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: query,
    encoding_format: "float",
  });

  return response.data[0].embedding;
}
