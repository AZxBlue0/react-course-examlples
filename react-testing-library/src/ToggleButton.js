export const ToggleButton = ({ onText, offText, isOn, onButtonClick }) => {

    return (
        <button className={isOn ? "on" : "off"} onClick={onButtonClick}>{isOn ? onText : offText}</button>
    )
}