import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from "vitest";

test("bare bones test", () => {
    expect(calculateScrabbleScore("A")).toBe(1)
})