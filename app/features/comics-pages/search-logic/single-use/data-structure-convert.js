import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("../data/comicData2.json");
const transformedFilePath = path.resolve("../data/transformedComicData.json");

const transformData = (data) => {
  return data.map((item) => ({
    values: [],
    metadata: {
      filename: item.filename,
      published: item.publishedAt,
      title: item.title,
      content: item.content,
    },
  }));
};

const processComicData = async () => {
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
};

processComicData();
