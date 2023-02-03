import { useState } from "react";
import { useRecoilState } from "recoil";
import { displayColorHexState } from "./recoil/selectors";

export const ColorDisplay = () => {
    const [displayColor, setDisplayColor] = useRecoilState(displayColorHexState);
    const [hexInput, setHexInput] = useState('');

    return (
        <>
            <div className='display' style={{
                backgroundColor: displayColor,
                height: '200px',
                width: '100%',
                marginTop: '1em'
            }} ></div>
        </>
    )
}