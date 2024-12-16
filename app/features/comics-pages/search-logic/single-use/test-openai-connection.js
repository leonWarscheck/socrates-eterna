import OpenAI from "openai";

// const OPENAI_API_KEY =
//   "sk-proj-ODL4ukNk3dW0mkygmbLfT3BlbkFJBip53QMdS78DUTjTfhoC";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  project: "proj_Ob5R64Ai0u4futQmHQe7P8xp",
  organization: "org-jRQ76nlnndQiu2Oyzq5jxe8p",
});

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "Your text string goes here",
    encoding_format: "float",
  });

  console.log(embedding);
}

main();
