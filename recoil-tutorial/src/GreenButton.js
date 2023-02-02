import { useRecoilState } from "recoil"
import { greenClickState } from "./recoil/atoms"

export const GreenButton = () => {
    const [clicks, setClicks] = useRecoilState(greenClickState);
    return (
        <div>
            <button onClick={() => {setClicks(clicks+1)}}>Green</button>
            <p>{clicks}</p>
        </div>
    )
}