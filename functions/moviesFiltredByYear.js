import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));
import prompts from "prompts";

export async function moviesFiltredByYear() {
  const filterBy = await prompts({
    type: "text",
    name: "movieYear",
    message: "Which year ?",
  });
  const filterByYear = movies.filter(
    (movie) => movie.Year === parseInt(filterBy.movieYear)
  );
  console.log(filterByYear);
}
