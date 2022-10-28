import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));
import prompts from "prompts";

export async function moviesFiltredByName() {
  let result = "";
  const filterBy = await prompts({
    type: "text",
    name: "movieName",
    message: "Which movie ?",
  });
  const filterByName = movies.filter((movie) =>
    movie.Name.toUpperCase().includes(filterBy.movieName.toUpperCase())
  );
  filterByName.map((movie) => {
    result += movie.Name + "\n";
  });
  return result;
}
