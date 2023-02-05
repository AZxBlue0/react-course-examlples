import moment from "moment";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { DropdownWindow } from "./DropdownWindow";
import { DatePickerCell } from "./DatePickerCell";
import styled from "styled-components";

const Container = styled.div`
    position: relative
`;

export const DatePickerController = () => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const today = moment();
    const [currentMonth, setCurrentMonth] = useState(today);

    const incrementMonth = () => {
        const newMonth = currentMonth.add(1, 'month').clone();
        setCurrentMonth(newMonth);
    }

    const decrementMonth = () => {
        const newMonth = currentMonth.subtract(1, 'month').clone();
        setCurrentMonth(newMonth);
    }

    const onDateSelected = (date) => {
        console.log(date);
        setSelectedDate(date);
        setIsShowingDropdown(false);
    }

    return (
        <Container>
            <input readOnly onClick={() => setIsShowingDropdown(true)} value={selectedDate ? selectedDate.format('DD - MM - YYYY') : today.format('DD - MM - YYYY')} />
            <DropdownWindow shouldShow={isShowingDropdown} onRequestClose={() => {
                setIsShowingDropdown(false);
            }}>
                <Calendar
                    onCellClicked={onDateSelected}
                    getCellProps={(date) => {
                        return {
                            isSelected: date.isSame(selectedDate, 'date'),
                        }
                    }}
                    month={currentMonth.format('MM')}
                    year={currentMonth.format('YYYY')}
                    prevButton={decrementMonth}
                    nextButton={incrementMonth}
                    cellComponent={DatePickerCell}
                />
            </DropdownWindow>
        </Container>
    )
}