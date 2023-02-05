import styled from "styled-components";

const CellWrap = styled.div`
    background-color: ${props => props.isSelected ? ' #f19239' : 'transparent'};
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

export const DatePickerCell = ({ isSelected, dateNumber, onClick }) => {
    return dateNumber && (
        <CellWrap onClick={() => onClick(dateNumber)} isSelected={isSelected}>
            {dateNumber.format('D')}
        </CellWrap>
    )
}