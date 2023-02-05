import moment from "moment";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { NewEventForm } from "./NewEventForm";
import { EventCell } from "./EventCell";

export const EventTrackerController = () => {
    const [events, setEvents] = useState([]);
    const [isNewEventModalShowing, setIsNewEventModalShowing] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const { search } = useLocation();
    const monthIndex = new URLSearchParams(search).get('m');
    const yearIndex = new URLSearchParams(search).get('y');

    const today = (monthIndex && yearIndex) ? moment(`${monthIndex}${yearIndex}`, 'MMYYYY') : moment();

    const [currentMonth, setCurrentMonth] = useState(today);

    const navigate = useNavigate();

    const createNewEvent = (name, time) => {
        setEvents(events.concat({ name, time, date: selectedDate }));
        setIsNewEventModalShowing(false);
        setSelectedDate(null);
    }

    const incrementMonth = () => {
        const newMonth = currentMonth.add(1, 'month').clone();
        navigate(`/?m=${newMonth.format('MM')}&y=${newMonth.format('YYYY')}`);
        setCurrentMonth(newMonth);
    }

    const decrementMonth = () => {
        const newMonth = currentMonth.subtract(1, 'month').clone();
        navigate(`/?m=${newMonth.format('MM')}&y=${newMonth.format('YYYY')}`);
        setCurrentMonth(newMonth);
    }

    const displayModal = (date, month, year) => {
        console.log(moment(`${date}${month}${year}`, 'DDMMYYYY'));
        setSelectedDate(moment(`${date}${month}${year}`, 'DDMMYYYY'));
        setIsNewEventModalShowing(true);
    }
    return (<>
        <Modal shouldShow={isNewEventModalShowing} onRequestClose={() => {
            setIsNewEventModalShowing(false);
        }}>
            <h3>New event for {selectedDate && selectedDate.format('DD/MM/YYYY')}</h3>
            <NewEventForm onSubmit={createNewEvent} />
        </Modal>
        <Calendar
            onCellClicked={displayModal}
            getCellProps={(date) => {
                const eventsForDay = events.filter(event => {
                    return event.date.isSame(date, 'day;')
                });

                return ({ events: eventsForDay })
            }
            }
            month={currentMonth.format('MM')}
            year={currentMonth.format('YYYY')}
            prevButton={decrementMonth}
            nextButton={incrementMonth}
            cellComponent = {EventCell}
            />
    </>
    )
}