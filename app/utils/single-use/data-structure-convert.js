import fs from "fs/promises";
import path from "path";

// Define the path to your JSON file
const filePath = path.resolve("../data/comicData2.json");
const transformedFilePath = path.resolve("../data/transformedComicData.json");

// Function to transform the data
const transformData = (data) => {
  return data.map((item) => ({
    values: [], // Add your embedding values here
    metadata: {
      filename: item.filename,
      published: item.publishedAt,
      title: item.title,
      content: item.content,
    },
  }));
};

// Main function to read, transform, and save data
const processComicData = async () => {
  try {
    // Read the original comic data
    const rawData = await fs.readFile(filePath, "utf8");
    const comicData = JSON.parse(rawData);

    // Transform the data
    const transformedData = transformData(comicData);

    // Save the transformed data to a new JSON file
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

// Run the main function
processComicData();
