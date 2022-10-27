import { moviesRequested } from "./moviesRequested";
import prompts from "prompts";

jest.mock("prompts");

test("Unit Test N1: user want to see movies list", async () => {
  prompts.mockResolvedValue({ userAnswer: "yes" });
  expect(await moviesRequested()).toBe(
    `Here is the list of movies 🎬 available
Reservoir Dogs 1992 Tarantino
Twin Peaks 1990 Lynch
Underground 1995 Kusturica
Psychose 1960 Hitchcock
Shining 1980 Kubrick
Annie Hall 1977 Allen
Jurassic Park 1992 Spielberg
Piege de cristal 1990 Hunt
Une journee en enfer 1994 Hunt
48 minutes pour vivre 1992 Hunt
Metropolis 1926 Lang
Manhattan 1979 Allen
Impitoyable 1992 Eastwood
Brazil 1984 Gillian
Vertigo 1958 Hitchcock
Pulp Fiction 1995 Tarantino
Greystocke 1984 Hudson
Le dernier metro 1980 Truffaut
Casablanca 1942 Curtis
Broken Arrow 1996 Woo
Volte-Face 1997 Woo
Titanic 1998 Cameron
Mission Impossible 2 2000 Woo
Mission Impossible 1997 De Palma
Sleepy Hollow 1999 Burton
Edward scissorhands 1990 Burton
`
  );
});
