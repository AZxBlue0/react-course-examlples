import { useRecoilState } from "recoil"
import { blueClickState } from "./recoil/atoms"

export const BlueButton = () => {
    const [clicks, setClicks] = useRecoilState(blueClickState);
    return (
        <div>
            <button onClick={() => { setClicks(clicks + 1) }}>Blue</button>
            <p>{clicks}</p>
        </div>
    )
}