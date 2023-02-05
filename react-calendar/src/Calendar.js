import moment from "moment/moment";
import { daysOfTheWeek, segmentIntoWeeks, getDaysForWeeksInMonth } from "./util";
import styled from "styled-components";

const CalendarControlsWrap = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
`;

const CalendarControls = styled.div`
    margin:auto 0;
    max-width: 400px;
    text-align: center;
    display:flex;
    flex-direction: row;
`;

const CalendarTable = styled.div`
height:85%;
display: flex;
flex-direction: column;
width: 100%;
`

const CalendarRow = styled.div`
display: flex;
flex:1;
`
const CalendarHeading = styled.div`
display: flex;
flex-direction: row;
`;
const CalendarTableWrap = styled.div`
`;
const CalendarHeadingCell = styled.div`
    flex:1;
    text-align: center;
`;

const CalendarCellWrap = styled.div`
    padding: 0px;
    flex: 1;
`;

const MonthYearWrapper = styled.div`
    display: flex;
    padding: 0em 1em 0em 1em
`;

export const Calendar = ({ onCellClicked, month, year, prevButton, nextButton, getCellProps,
    cellComponent: CellComponent }) => {
    const currentMonth = moment(`${month}${year}`, 'MMYYYY');

    const weeks = segmentIntoWeeks(getDaysForWeeksInMonth(currentMonth));


    return (
        <>
            <CalendarTableWrap>
                <CalendarControlsWrap>
                    <MonthYearWrapper>
                        <h1>{currentMonth.format('MMMM')}</h1>&nbsp;
                        <h1 className='dim'>{currentMonth.format('YYYY')}</h1>
                    </MonthYearWrapper>
                    <CalendarControls>
                        <button onClick={prevButton}> Previous </button>
                        <button onClick={nextButton}> Next </button>
                    </CalendarControls>
                </CalendarControlsWrap>
                <CalendarTable>
                    <CalendarHeading>
                        {daysOfTheWeek.map(day => <CalendarHeadingCell key={day}>{day}</CalendarHeadingCell>)}
                    </CalendarHeading>
                    {weeks.map((displayWeek, i) => {
                        return (
                            <CalendarRow key={i}>
                                {displayWeek.map((dayMoment, j) => {
                                    return (
                                        <CalendarCellWrap key={`${i}${j}wrap`}>
                                            <CellComponent
                                                isInCurrentMonth = {dayMoment.isSame(currentMonth, 'month')}
                                                dateNumber={dayMoment}
                                                onClick={onCellClicked}
                                                key={`${i}${j}cell`}
                                                {...getCellProps(dayMoment)}
                                            />
                                        </CalendarCellWrap>
                                    )
                                }
                                )
                                }
                            </CalendarRow>
                        )
                    })}
                </CalendarTable>
            </CalendarTableWrap>
        </>
    );
}