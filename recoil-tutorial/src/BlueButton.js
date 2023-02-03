import { useRecoilState } from "recoil"
import { colorControlStateFamily } from "./recoil/atoms"
import Slider from "rc-slider";

export const BlueButton = () => {
    const [colorValue, setColorValue] = useRecoilState(colorControlStateFamily('blue'));

    return (
        <div>
            <Slider
                trackStyle={{backgroundColor: 'blue'}}
                min={0}
                max={255}
                value={colorValue}
                onChange={value=>setColorValue(value)}
            />
            <p>{colorValue}</p>
        </div>
    )
}