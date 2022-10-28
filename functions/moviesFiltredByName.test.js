import prompts from "prompts";
import { moviesFiltredByName } from "./moviesFiltredByName";

jest.mock("prompts");

test("Unit Test N2: user want to filter by movie name", async () => {
  prompts.mockResolvedValue({ movieName: "mission impossible" });
  expect(await moviesFiltredByName()).toBe(
    "Mission Impossible 2\nMission Impossible\n"
  );
});
