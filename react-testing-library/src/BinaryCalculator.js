import { ToggleButton } from './ToggleButton'
import { useState } from 'react'

export const BinaryCalculator = ({ numberOfButtons }) => {
    const [buttonStates, setButtonStates] = useState(Array(numberOfButtons).fill(false));

    const getBinarySum = binaryStates => {
        return binaryStates
            .map((isOn, i) => (isOn ? 1 : 0) * Math.pow(2, numberOfButtons - i - 1)).reduce((sum, x) => sum + x);
    }

    const toggleButtonState = index => {
        const statesCopy = [...buttonStates];
        statesCopy[index] = !statesCopy[index];
        setButtonStates(statesCopy);
    }

    return (
        <>
            <h3>Total is {getBinarySum(buttonStates)}</h3>
            {
                buttonStates.map((buttonState, i) => (
                    <ToggleButton onButtonClick={() => toggleButtonState(i)} key={i} onText="1" offText="0" isOn={buttonState} />
                ))
            }
        </>
    )
}