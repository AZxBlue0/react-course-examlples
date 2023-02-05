import { useSelector } from "react-redux";

const ColorDisplay = () => {
    const { red, green, blue } = useSelector(state => state.clicks);
    return (
        <div style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: `200px`,
            height: `200px`
        }}>

        </div>
    )
}

export { ColorDisplay }