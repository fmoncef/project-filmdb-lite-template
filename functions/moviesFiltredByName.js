import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));
import prompts from "prompts";

export async function moviesFiltredByName() {
  const filterBy = await prompts({
    type: "text",
    name: "movieName",
    message: "Which movie ?",
  });
  const filterByName = movies.filter(
    (movie) => movie.Name.toUpperCase() === filterBy.movieName.toUpperCase()
  );
  console.log(filterByName);
}
