import { describe, expect, test } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

describe("find max value", function () {
  test("array max value", function () {
    const result = findMaxValue();
    const expectedResult = null;

    expect(result).toBe(expectedResult);
  });
});

//===================================================

describe("find factorial", function () {
  test("find factorial", function () {
    const result = factorial(5);
    const expectedResult = 120;

    expect(result).toBe(expectedResult);
  });
});

//===================================================

describe("find array equal", function () {
  test("find array equal", function () {
    const result = areArraysEqual(3, 2, 1);
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });
});

//===================================================

describe("find to tile case", function () {
  test("find to tile case", function () {
    const result = toTitleCase(12345);
    const expectedResult = "";

    expect(result).toBe(expectedResult);
  });
});
