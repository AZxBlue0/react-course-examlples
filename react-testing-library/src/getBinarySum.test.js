import { getBinarySum } from "./getBinarySum";
import cases from "jest-in-case";

cases('Calculating decimal numbers from arrays', ({ tfArray, expected }) => {
    const actual = getBinarySum(tfArray);
    expect(actual).toEqual(expected)
}, [
    {tfArray: [true], expected: 1},
    {tfArray: [true, false], expected: 2},
    {tfArray: [false, false, true], expected: 1},
    {tfArray: [true, false, false], expected: 4},
])
