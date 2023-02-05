import { fireEvent, render, screen } from '@testing-library/react'
import { ToggleButton } from "./ToggleButton";

test("Displays 'on' text, when button is on", () => {
    render(<ToggleButton onText="on" offText="off" isOn={true} />);

    expect(screen.getByText("on")).toBeInTheDocument();
    expect(screen.queryByText('off')).not.toBeInTheDocument();
});

// test('Calls the on toggle function prop when button is clicked', () => {
//     const mockFn = jest.fn();
//     render(<ToggleButton onText="I'm on" offText="I'm off!" isOn={false} onToggle={mockFn} />)
//     const button = screen.getByRole('button');
//     fireEvent.click(button);
    
//     expect(mockFn).toHaveBeenCalled();
// })