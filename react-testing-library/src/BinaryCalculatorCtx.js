import { ToggleButton } from './ToggleButton'
import { BinaryClicksContext } from './BinaryClicksContext';
import { useContext } from 'react'
import { getBinarySum } from "./getBinarySum";

export const BinaryCalculator = () => {
    const {buttonStates, toggleButtonState} = useContext(BinaryClicksContext);

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