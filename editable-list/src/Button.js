import styled from "styled-components"

export const ButtonBase = styled.button`
    font-size: 1em;
    padding: 1em;
    border-radius: 0.2em;
    border: none;
    box-shadow:inset 0px 0px 0px 1px rgba(0,0,0,0.1);
    cursor: pointer;
    background-image: ${props => props.filled ? 'linear-gradient(45deg ,#ee4c6e, #f1ad40)' : 'none'};
    background-color:${props => !props.filled ? props.color : 'transparent'};
    color:  #f4f0e5;
    text-shadow: 0px 0px 2px rgba(0,0,0,0.1);
    font-weight: bold;
`;

export const Button = ({ text, filled, color, ...props }) => {
    return (<ButtonBase color={color} filled={filled} {...props}>{text}</ButtonBase>)
}