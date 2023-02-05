import { fibbonacci } from "./fibonacci";

test('Returns 1 for the first two numbers', () => {
    const actualFirst = fibbonacci(0);
    const actualSecond = fibbonacci(1);

    const expeceted = 1;

    expect(actualFirst).toEqual(expeceted);
    expect(actualSecond).toEqual(expeceted);
})

test('Returns sum of the previous 2 numbers for n>1', () => {
    const actualThird = fibbonacci(2);
    const actualTenth = fibbonacci(9);

    const expectedThird = 2;
    const expectedTenth = 55;

    expect(actualThird).toEqual(expectedThird);
    expect(actualTenth).toEqual(expectedTenth);  
})
