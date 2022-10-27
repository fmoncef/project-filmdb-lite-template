import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));
import prompts from "prompts";

export async function moviesFiltredByDirector() {
  const filterBy = await prompts({
    type: "text",
    name: "movieDirector",
    message: "Which Director ?",
  });
  const filterByDirector = movies.filter(
    (movie) =>
      movie.Director.toUpperCase() === filterBy.movieDirector.toUpperCase()
  );
  console.log(filterByDirector);
}
