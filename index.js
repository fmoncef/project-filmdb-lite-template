import chalk from "chalk";
import prompts from "prompts";
import { filterRequest } from "./functions/filterRequest.js";
import { moviesRequested } from "./functions/moviesRequested.js";

async function app() {
  console.log(chalk.bgBlue("Welcome to MovieDB!"));

  const promptResult = await prompts({
    type: "text",
    name: "firstName",
    message: "Quel est ton nom?",
  });

  console.log(chalk.redBright.bold(`Bienvenue ${promptResult.firstName} !`));
  console.log(await moviesRequested());
  filterRequest();
}

app();
