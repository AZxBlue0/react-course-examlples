import { useState } from "react";
import { useRecoilState } from "recoil";
import { displayColorHexState, displayColorState } from "./recoil/selectors";

export const ColorDisplay = () => {
    const [displayColor, setDisplayColor] = useRecoilState(displayColorHexState);
    const [hexInput, setHexInput] = useState('');

    return (
        <>
            <div style={{
                backgroundColor: displayColor,
                height: '400px',
                width: '400px',
            }} ></div>
            <input
                value={hexInput}
                onChange={e => setHexInput(e.target.value)}
            />
            <button onClick={() => {setDisplayColor(hexInput); setHexInput('')}}>Set RGB</button>
        </>
    )
}