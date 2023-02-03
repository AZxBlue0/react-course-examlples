import { useRecoilState } from "recoil"
import { colorControlStateFamily } from "./recoil/atoms"
import Slider from "rc-slider";

export const ColorControl = ({ color }) => {
    const [colorValue, setColorValue] = useRecoilState(colorControlStateFamily(color));

    return (
        <div class="color-control" style={{ borderBottom: `3px solid ${color}` }}>
            <p>{colorValue}</p>
            <Slider
                trackStyle={{ backgroundColor: color }}
                min={1}
                max={10}
                value={colorValue}
                onChange={value => setColorValue(value)}
            />
        </div>
    )
}