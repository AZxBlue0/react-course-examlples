import { useRecoilState } from "recoil"
import { redClickState } from "./recoil/atoms"

export const RedButton = () => {
    const [clicks, setClicks] = useRecoilState(redClickState);
    return (
        <div>
            <button onClick={() => {setClicks(clicks+1)}}>Red</button>
            <p>{clicks}</p>
        </div>
    )
}