import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    height: 100%;
    min-height: 40px;
    padding 4px 0;
`
const CellWrap = styled.div`
    display: flex;
    align-items:center;
    border-radius: 1em;
    ${props => props.isSelected && 'border-radius: 0;'}
    ${props => props.isEnd && 'border-radius: 0 1em 1em 0;'}
    ${props => props.isStart && 'border-radius: 1em 0 0 1em;'}
    ${props => (props.isStart && props.isEnd) && 'border-radius: 1em 1em 1em 1em;'}

    justify-content:center;

    background-color: ${props => props.isSelected ? ' #f19239' : 'transparent'};
    ${props => props.isSelected && !props.isInCurrentMonth && ' background-color:#f19239AA;'};
    height:100%;
    transition: 200ms;
    ${props => !props.isInCurrentMonth && 'color: #FFF8y;'}

    :hover{
        background-color: ${props => !props.isSelected ? 'rgba(255,255,255, 0.1)' : '#03adc8'};
        ${props => !props.isSelected && 'border-radius: 1em;'};
    }
`;

export const DateRangePickerCell = ({
    isSelected,
    isInCurrentMonth,
    isStart,
    isEnd,
    dateNumber,
    onClick }) => {
    return dateNumber && (
        <Container>
            <CellWrap onClick={() => onClick(dateNumber)} isInCurrentMonth={isInCurrentMonth} isSelected={isSelected} isStart={isStart} isEnd={isEnd}>
                {dateNumber.format('D')}
            </CellWrap>
        </Container>
    )
}