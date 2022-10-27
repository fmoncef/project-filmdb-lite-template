import prompts from "prompts";
import fs from "fs";
const movies = JSON.parse(fs.readFileSync("./src/movies.json", "utf-8"));

export async function movieRequested() {
  let result = "";
  const promptMovieRequest = await prompts({
    type: "text",
    name: "userAnswer",
    message: "Would you like to see available movies ? Yes/No",
  });
  if (promptMovieRequest.userAnswer === "yes") {
    result += "Here is the list of movies 🎬 available" + "\n";
    movies.map((movie) => {
      result += movie.Name + "\n";
    });
  }
  return result;
}
