import prompts from "prompts";
import { moviesFiltredByDirector } from "./moviesFiltredByDirector.js";
import { moviesFiltredByName } from "./moviesFiltredByName.js";
import { moviesFiltredByYear } from "./moviesFiltredByYear.js";
import { sayBye } from "./sayBye.js";

export async function filterRequest() {
  const promptfilterRequest = await prompts({
    type: "text",
    name: "filterRequest",
    message: "Do you want to filter your movies ? (name/year/director) or quit",
  });
  if (promptfilterRequest.filterRequest === "name") {
    console.log(await moviesFiltredByName());
    filterRequest();
  } else if (promptfilterRequest.filterRequest === "year") {
    console.log(await moviesFiltredByYear());
    filterRequest();
  } else if (promptfilterRequest.filterRequest === "director") {
    console.log(await moviesFiltredByDirector());
    filterRequest();
  } else if (promptfilterRequest.filterRequest === "quit") {
    sayBye();
  } else {
    filterRequest();
  }
}
