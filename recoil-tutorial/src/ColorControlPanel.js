import { useState } from "react";
import { useRecoilState } from "recoil";
import { ColorControl } from "./ColorControl";
import { colorsState } from "./recoil/atoms";

export const ColorControlPanel = () => {
    const [colors, setColors] = useRecoilState(colorsState);
    const [newColor, setNewColor] = useState('');

    return (
        <>
            <h3>Colors</h3>

            {colors.map(color => (
                <ColorControl color={color} key={color} />
            ))}
            <input
                type='text'
                value={newColor}
                onChange={e => setNewColor(e.target.value)}
            />
            <button onClick={() => {
                setColors(colors.concat(newColor));
                setNewColor('');
            }}>Add new color</button>
        </>
    )
}