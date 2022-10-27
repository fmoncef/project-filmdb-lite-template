import { movieRequested } from "./movieRequested";
import prompts from "prompts";

jest.mock("prompts");

test("Unit Test N1: user want to see movies list", async () => {
  prompts.mockResolvedValue({ userAnswer: "yes" });
  expect(await movieRequested()).toBe(
    `Here is the list of movies 🎬 available
Reservoir Dogs
Twin Peaks
Underground
Psychose
Shining
Annie Hall
Jurassic Park
Piege de cristal
Une journee en enfer
48 minutes pour vivre
Metropolis
Manhattan
Impitoyable
Brazil
Vertigo
Pulp Fiction
Greystocke
Le dernier metro
Casablanca
Broken Arrow
Volte-Face
Titanic
Mission Impossible 2
Mission Impossible
Sleepy Hollow
Edward scissorhands
`
  );
});
