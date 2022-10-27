import prompts from "prompts";
import { filterRequest } from "./filterRequest";

jest.mock("prompts");

test("Unit Test N2: user want to filter movies ", async () => {
  prompts.mockResolvedValue({ userAnswer: "name" });
  expect(await filterRequest()).toBe(`Reservoir Dogs
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
  `);
});
