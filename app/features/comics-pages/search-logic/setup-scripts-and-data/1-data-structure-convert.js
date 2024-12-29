/* eslint-disable */
import fs from "node:fs/promises";
import path from "node:path";

import { v4 as uuidv4 } from "uuid";

// Optional script to convert existing comic data in to datashape required by
// pinecone. Only needed when migrating from other database or at initial setup.

const filePath = path.resolve("../data/comicData2.json");
const transformedFilePath = path.resolve("../data/transformedComicData.json");

const transformData = (data) => {
  return data.map((item) => ({
    id: uuidv4(),
    values: [],
    metadata: {
      filename: item.filename,
      published: item.publishedAt,
      title: item.title,
      content: item.content,
    },
  }));
};

try {
  const rawData = await fs.readFile(filePath, "utf8");
  const comicData = JSON.parse(rawData);

  const transformedData = transformData(comicData);

  await fs.writeFile(
    transformedFilePath,
    JSON.stringify(transformedData, null, 2),
  );

  console.log(
    "Data transformation complete. Transformed data saved to transformedComicData.json",
  );
} catch (error) {
  console.error("Error processing comic data:", error);
}
