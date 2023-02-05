import { flipElementAtIndex } from "./flipElementAtIndex";
import cases from "jest-in-case";

cases('Changing speciufied index from true to false', ({ arr, index, expected }) => {
    const actual = flipElementAtIndex(index, arr);
    expect(actual).toEqual(expected);
}, [
    { arr: [true, true, true], index: 1, expected: [true, false, true] },
    { arr: [true, true, true], index: 2, expected: [true, true, false] },
    { arr: [false, false, false], index: 0, expected: [true, false, false] },
])