import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from "vitest";

test("bare bones test", () => {
    expect(calculateScrabbleScore("b")).toBe(1);
});
