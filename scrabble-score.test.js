import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from "vitest";

test("bare bones test", () => {
    expect(calculateScrabbleScore("A")).toBe(1);
});

test.each([
    ["a", 1],
    ["b", 3],
    ["c", 3],
    ["d", 2],
    ["e", 1],
    ["f", 4],
    ["g", 2],
    ["h", 4],
    ["i", 1],
    ["j", 8],
    ["k", 5],
    ["l", 1],
    ["m", 3],
    ["n", 1],
    ["o", 1],
    ["p", 3],
    ["q", 10],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 4],
    ["w", 4],
    ["x", 8],
    ["y", 4],
    ["z", 10],
])("%s -> %i", (a, expected) => {
    expect(calculateScrabbleScore(a)).toBe(expected);
});

// test.each([
//     [1, 1, 2],
//     [1, 2, 3],
//     [2, 1, 3],
// ])("add(%i, %i) -> %i", (a, b, expected) => {
//     expect(a + b).toBe(expected);
// });

// // this will return
// // ✓ add(1, 1) -> 2
// // ✓ add(1, 2) -> 3
// // ✓ add(2, 1) -> 3
