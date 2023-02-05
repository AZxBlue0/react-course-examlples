import { useState } from "react";
import { BinaryClicksContext } from "./BinaryClicksContext"
import { flipElementAtIndex } from "./flipElementAtIndex";

export const BinaryClicksProvider = ({ numberOfButtons, children }) => {
    const [buttonStates, setButtonStates] = useState(Array(numberOfButtons).fill(false));

    const toggleButtonState = buttonIndex => {
        setButtonStates(flipElementAtIndex(buttonIndex, buttonStates));
    };

    return (
        <BinaryClicksContext.Provider value={{ buttonStates, toggleButtonState }}>
            {children}
        </BinaryClicksContext.Provider>
    )
}