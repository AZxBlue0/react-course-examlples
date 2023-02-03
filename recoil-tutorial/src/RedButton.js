import { useRecoilState } from "recoil"
import { colorControlStateFamily } from "./recoil/atoms"
import Slider from "rc-slider";

export const RedControl = () => {
    const [colorValue, setColorValue] = useRecoilState(colorControlStateFamily('red'));

    return (
        <div>
            <Slider
                trackStyle={{ backgroundColor: 'red' }}
                min={0}
                max={255}
                value={colorValue}
                onChange={value => setColorValue(value)}
            />
            <p>{colorValue}</p>
        </div>
    )
}