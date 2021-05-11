import fs from "fs/promises";

export const readFile = async () => {
  try {
    const data = await fs.readFile("./database.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error) {
      await fs.writeFile("./database.json", JSON.stringify([]));
      const data = await fs.readFile("./database.json", "utf-8");
      return JSON.parse(data);
    }
  }
};

export const generateId = (id: number) => {

  if (id === 0) {
    id = 1;
  } else {
    id++;
  }

  return id;
};
