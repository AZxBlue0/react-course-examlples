import moment from "moment";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { DropdownWindow } from "./DropdownWindow";
import { DateRangePickerCell } from "./DateRangePickerCell";
import styled from "styled-components";

const getDatesBetween = (startDate, endDate) => {
    if (!(startDate && endDate) || endDate.diff(startDate, 'days') < 0) {
        return [];
    }

    let currentDate = startDate.clone();
    let dates = [];
    while (endDate.diff(currentDate, 'days') >= 0) {
        dates.push(currentDate.clone());
        currentDate.add(1, 'days');
    }

    return dates;
}
const dateIsBetween = (startDate, endDate, targetDate) => {
    return targetDate.diff(startDate, 'days') > 0 && targetDate.diff(endDate, 'date') < 0;
}

const Container = styled.div`
    position: relative
`;
let selectedDates = [];

export const DateRangePickerController = () => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    selectedDates = getDatesBetween(selectedStartDate, selectedEndDate);


    const [startDateInputIsAvtive, setStartDateInputIsActive] = useState(false);
    const [endDateInputIsAvtive, setEndDateInputIsActive] = useState(false);

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
        if (startDateInputIsAvtive) {
            if (selectedEndDate && selectedEndDate.diff(date, 'days') < 0) {
                setSelectedStartDate(selectedEndDate);
                setSelectedEndDate(date)
            } else {
                setSelectedStartDate(date);
            }
            setStartDateInputIsActive(false);
            setEndDateInputIsActive(true);
        } else {
            if (date.diff(selectedStartDate, 'days') < 0) {
                setSelectedEndDate(selectedStartDate);
                setSelectedStartDate(date);
            } else {
                setSelectedEndDate(date);
            }
            setEndDateInputIsActive(false);
            setStartDateInputIsActive(true);
        }
    }


    return (
        <Container>
            <input readOnly onClick={() => {
                setIsShowingDropdown(true);
                setEndDateInputIsActive(false);
                setStartDateInputIsActive(true);
            }} value={selectedStartDate ? selectedStartDate.format('DD - MM - YYYY') : today.format('DD - MM - YYYY')} />
            <input readOnly onClick={() => {
                setIsShowingDropdown(true);
                setStartDateInputIsActive(false);
                setEndDateInputIsActive(true);
            }} value={selectedEndDate ? selectedEndDate.format('DD - MM - YYYY') : today.format('DD - MM - YYYY')} />
            <DropdownWindow shouldShow={isShowingDropdown} onRequestClose={() => {
                setIsShowingDropdown(false);
                setStartDateInputIsActive(false);
                setEndDateInputIsActive(false);
            }}>
                <Calendar
                    onCellClicked={onDateSelected}
                    getCellProps={(date) => {
                        return {
                            isSelected: date.isSame(selectedStartDate, 'date')
                                || date.isSame(selectedEndDate, 'date')
                                || selectedDates.some(selectedDate => selectedDate.isSame(date)),
                                isStart: date.isSame(selectedStartDate, 'date'),
                                isEnd: date.isSame(selectedEndDate, 'date')
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