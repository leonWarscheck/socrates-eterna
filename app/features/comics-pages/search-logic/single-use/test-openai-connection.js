import openai from "openai";

const openaiClient = new openai({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY,
  project: "proj_Ob5R64Ai0u4futQmHQe7P8xp",
  organization: "org-jRQ76nlnndQiu2Oyzq5jxe8p",
});

console.log(
  await openaiClient.embeddings.create({
    model: "text-embedding-3-small",
    input: "Your text string goes here",
    encoding_format: "float",
  }),
);
