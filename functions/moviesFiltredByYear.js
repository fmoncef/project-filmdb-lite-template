import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));
import prompts from "prompts";

export async function moviesFiltredByYear() {
  let result = "";
  const filterBy = await prompts({
    type: "text",
    name: "movieYear",
    message: "Which year ?",
  });
  const filterByYear = movies.filter(
    (movie) => movie.Year === parseInt(filterBy.movieYear)
  );
  filterByYear.map((movie) => {
    result += movie.Name + " of " + movie.Director + "\n";
  });
  return result;
}
