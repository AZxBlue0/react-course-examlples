import styled from "styled-components"

const TextInputBase = styled.input`
    font-size: 1em;
    padding: 1em;
    border: none;
    border-radius: 0.2em;
    box-shadow:inset 0px 0px 0px 1px rgba(0,0,0,0.1);
    cursor: pointer;
    background-color: #232435;
    color: #f4f0e5;
    text-shadow: 0px 0px 2px rgba(0,0,0,0.3);
    font-weight: bold;
    box-sizing: border-box;
    transition: 200ms;
    ${props => props.fullWidth && 'width: 100%;'}

    &:focus{
        outline: 2px solid ${props => props.focusColor ? props.focusColor : '#ee4c6e'};
    }
`

export const TextInput = ({ focusColor, fullWidth, ...props }) => {
    return <TextInputBase focusColor={focusColor} fullWidth={fullWidth} {...props} />
}
