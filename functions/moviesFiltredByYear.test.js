import prompts from "prompts";
import { moviesFiltredByYear } from "./moviesFiltredByYear";

jest.mock("prompts");

test("Unit Test N2: user want to filter by movie year", async () => {
  prompts.mockResolvedValue({ movieYear: 1992 });
  expect(await moviesFiltredByYear()).toBe(`Reservoir Dogs of Tarantino
Jurassic Park of Spielberg
48 minutes pour vivre of Hunt
Impitoyable of Eastwood
`);
});
