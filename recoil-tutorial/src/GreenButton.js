import { useRecoilState } from "recoil"
import { colorControlStateFamily } from "./recoil/atoms"
import Slider from "rc-slider";

export const GreenButton = () => {
    const [colorValue, setColorValue] = useRecoilState(colorControlStateFamily('green'));

    return (
        <div>
            <Slider
                trackStyle={{backgroundColor: 'green'}}
                min={0}
                max={255}
                value={colorValue}
                onChange={value=>setColorValue(value)}
            />
            <p>{colorValue}</p>
        </div>
    )
}