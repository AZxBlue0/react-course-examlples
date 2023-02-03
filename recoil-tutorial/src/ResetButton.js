import { useRecoilState } from "recoil"
import { colorControlStateFamily } from "./recoil/atoms";

export const ResetButton = () => {

    const [, setRedClicks] = useRecoilState(colorControlStateFamily('red'));
    const [, setBlueClicks] = useRecoilState(colorControlStateFamily('red'));
    const [, setGreenClicks] = useRecoilState(colorControlStateFamily('red'));

    const resetClicks = () => {
        setRedClicks(0);
        setBlueClicks(0);
        setGreenClicks(0);
    }
    return (
        <div>
            <button onClick={() => resetClicks()}>Reset</button>
        </div>
    )
}