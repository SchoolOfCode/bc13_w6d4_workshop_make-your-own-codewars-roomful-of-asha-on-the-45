import { test, expect } from "@jest/globals";
import { generatePrimes } from "./main.js";

//👉 Write your tests below here:
test("Function returns an array of all prime numbers up to 1", () => {
    let actual = generatePrimes(1);
    let expected = [];
    expect(actual).toEqual(expected);
})

test("Function returns an array of all prime numbers up to 5", () => {
    let actual = generatePrimes(5);
    let expected = [2, 3, 5];
    expect(actual).toEqual(expected);
})

test("Function returns an array of all prime numbers up to 10", () => {
    let actual = generatePrimes(10);
    let expected = [2, 3, 5, 7];
    expect(actual).toEqual(expected);
})

test("Function returns an array of all prime numbers up to 100", () => {
    let actual = generatePrimes(100);
    let expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    expect(actual).toEqual(expected);
})