import styled from "styled-components";

const EventBox = styled.div`
    background-color: #f19239;
    color: #FFF;
    border-radius: 4px;
    padding: 4px;
    margin: 2px 15px;
    font-size: 12px;
    
`

export const Event = ({ name, time }) => {
    return (
        <EventBox>{name} -- {time}</EventBox>
    )
}