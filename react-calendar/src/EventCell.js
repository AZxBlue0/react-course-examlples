import styled from "styled-components";
import { Event } from "./Event";

const CellWrap = styled.div`
    border-top: 1px solid rgba(255,255,255, 0.1);
    border-left: 1px solid rgba(255,255,255, 0.1);
    border-bottom: 1px solid rgba(0,0,0, 0.3);
    border-right: 1px solid rgba(0,0,0, 0.3);
    position: relative;
    min-height:  4em;
    height:100%;
    :hover{
        background-color: rgba(255,255,255, 0.1);
    }
`;

export const EventCell = ({ dateNumber, events}) => {
    return dateNumber && (
        <CellWrap onClick={() => {
            (dateNumber.format('DD'),
                dateNumber.format('MM'),
                dateNumber.format('YYYY'))
        }}>
            {dateNumber.format('D')}
            {events.map(event => <Event key={event.name} time={event.time} name={event.name} />)}
        </CellWrap>
    )
}