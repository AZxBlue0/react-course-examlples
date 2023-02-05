import { cleanup, fireEvent, getAllByRole, render, screen } from "@testing-library/react";
import { BinaryCalculator } from "./BinaryCalculatorCtx";
import { renderWithContext } from "./renderWithContext";
import cases from 'jest-in-case';

test("Displays the correct number of buttons according to the ;number of buttons' prop", () => {
    //case for 7
    renderWithContext(<BinaryCalculator />, 7);
    let buttons = screen.queryAllByRole('button');
    expect(buttons.length).toEqual(7);
    cleanup();
    //case for 11
    renderWithContext(<BinaryCalculator />, 11);
    buttons = screen.queryAllByRole('button');
    expect(buttons.length).toEqual(11);
})

test('All buttons start off with text 0', () => {
    renderWithContext(<BinaryCalculator />, 5);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
        expect(button).toHaveTextContent('0');
    })
})

test('Starting sum is 0', () => {
    renderWithContext(<BinaryCalculator />, 5);
    const sumHeading = screen.getByRole('heading');
    expect(sumHeading).toHaveTextContent(/total is 0/i);
})

test('Button text changes to 1 after it is clicked', () => {
    renderWithContext(<BinaryCalculator />, 5);
    const firstButton = screen.getAllByRole('button')[0];
    expect(firstButton).toHaveTextContent('0');
    fireEvent.click(firstButton);
    expect(firstButton).toHaveTextContent('1');

})

cases('Calculationg the right totals', ({ numberOfButtons, clickIndicies, total }) => {
    renderWithContext(<BinaryCalculator />, numberOfButtons);
    screen.getAllByRole('button').forEach(
        (button, i) => {
            if (clickIndicies.includes(i)) {
                fireEvent.click(button);
            }
        }
    );

    const sumHeading = screen.getByRole('heading');
    expect(sumHeading).toHaveTextContent(`Total is ${total}`);
}, [
    { name: 'Total sum when all 7 buttons are on is 127', numberOfButtons: 7, clickIndicies: [0, 1, 2, 3, 4, 5, 6], total: 127 },
    { name: 'Total sum when all 3 buttons are on is 7', numberOfButtons: 3, clickIndicies: [0, 1, 2], total: 7 },
    { name: 'Least significant digit is on the right side', numberOfButtons: 7, clickIndicies: [6], total: 1 },
])
