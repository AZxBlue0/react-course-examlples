import { useRecoilState } from "recoil"
import { blueClickState, greenClickState, redClickState } from "./recoil/atoms";

export const ResetButton = () => {

    const [, setRedClicks]= useRecoilState(redClickState);
    const [, setBlueClicks]= useRecoilState(blueClickState);
    const [, setGreenClicks]= useRecoilState(greenClickState);

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