import OpenAI from "openai";

const OPENAI_API_KEY =
  "sk-proj-ODL4ukNk3dW0mkygmbLfT3BlbkFJBip53QMdS78DUTjTfhoC"; // Replace with your actual OpenAI API ke
// const OPENAI_API_KEY = 'sk-proj-CtGj9HdTzBmWZvfGUimHT3BlbkFJBP6kxnOlqTGSggeLDiyF'; // Replace with your actual OpenAI API ke
// const OPENAI_API_KEY = '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'; // Replace with your actual OpenAI API ke
// const OPENAI_API_KEY = 'sk-proj-rgHB1uD5bRJfSuHxXiFuT3BlbkFJZkk3lRNGvKZXpvX34T71'; // Replace with your actual OpenAI API ke

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
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
