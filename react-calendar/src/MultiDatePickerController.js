import moment from "moment";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { DropdownWindow } from "./DropdownWindow";
import { DateRangePickerCell } from "./DateRangePickerCell";
import styled from "styled-components";

const Container = styled.div`
    position: relative
`;

let selectedDates = [];

export const MultiDatePickerController = () => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);

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
        const isSelected = selectedDates.some(selectedDate => selectedDate.isSame(date, 'date'));

        if (isSelected) {
            setSelectedDates(selectedDates.filter(selectedDate => !selectedDate.isSame(date)));
        } else {
            setSelectedDates(selectedDates.concat(date));
        }
    }

    const isDateStart = (date) => {
        const currentDate = date.clone();
        currentDate.subtract(1, 'day');

        return !(selectedDates.some(selectedDate => selectedDate.isSame(currentDate, 'date')));
    }

    const isDateEnd = (date) => {
        const currentDate = date.clone();
        currentDate.add(1, 'day');
        return !(selectedDates.some(selectedDate => selectedDate.isSame(currentDate, 'date')))
    }

    return (
        <Container>
            <input readOnly onClick={() => {
                setIsShowingDropdown(true);
            }} value={selectedDates.map(date => date.format('DD-MM-YYYY')).join(', ')} />

            <DropdownWindow shouldShow={isShowingDropdown} onRequestClose={() => {
                setIsShowingDropdown(false);
            }}>
                <Calendar
                    onCellClicked={onDateSelected}
                    getCellProps={(date) => {
                        return {
                            isSelected: selectedDates.some(selectedDate => selectedDate.isSame(date, 'day')),
                            isStart: isDateStart(date),
                            isEnd: isDateEnd(date)
                        }
                    }}
                    month={currentMonth.format('MM')}
                    year={currentMonth.format('YYYY')}
                    prevButton={decrementMonth}
                    nextButton={incrementMonth}
                    cellComponent={DateRangePickerCell}
                />
            </DropdownWindow>
        </Container>
    )
}