import prompts from "prompts";
import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));

export async function moviesRequested() {
  let result = "";
  const promptMoviesRequest = await prompts({
    type: "text",
    name: "userAnswer",
    message: "Would you like to see available movies ? Yes/No",
  });
  if (promptMoviesRequest.userAnswer === "yes") {
    result += "Here is the list of movies 🎬 available" + "\n";
    movies.map((movie) => {
      result += movie.Name + " " + movie.Year + " " + movie.Director + "\n";
    });
  }
  return result;
}
