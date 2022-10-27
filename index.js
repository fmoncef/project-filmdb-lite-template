import chalk from "chalk";
import prompts from "prompts";
import { filterRequest } from "./functions/filterRequest.js";
import { movieRequested } from "./functions/movieRequested.js";

async function app() {
  console.log(chalk.bgBlue("Welcome to MovieDB!"));

  const promptResult = await prompts({
    type: "text",
    name: "firstName",
    message: "Quel est ton nom?",
  });

  console.log(chalk.redBright.bold(`Bienvenue ${promptResult.firstName} !`));
  console.log(await movieRequested());
  filterRequest();
}

app();
