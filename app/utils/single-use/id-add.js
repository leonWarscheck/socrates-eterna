import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import path from "path";

// Define the path to your JSON file
const filePath = path.resolve("../data/booksData.json");
const transformedFilePath = path.resolve("../data/booksData.json");

// Function to transform the data
const transformData = (data) => {
  return data.map((item) => ({
    id: uuidv4(),
    ...item,
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
      "Data transformation complete. Transformed data saved to comicData.json",
    );
  } catch (error) {
    console.error("Error processing comic data:", error);
  }
};

processComicData();
