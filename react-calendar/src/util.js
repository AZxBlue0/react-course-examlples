export const getDaysInMonth = (monthMoment) => {
    const monthCopy = monthMoment.clone();
    monthCopy.startOf('month');

    let days = [];

    while (monthCopy.month() === monthMoment.month()) {
        days.push(monthCopy.clone());
        monthCopy.add(1, 'days');
    }
    return days;
}

export const getDaysForWeeksInMonth = monthMoment => {
    const firstDayInMonth = monthMoment.clone().startOf('month');
    const mondayBeforeMonth = firstDayInMonth.clone().subtract(1, 'days').startOf('week').add(1,'days');

    const lastDayInMonth = monthMoment.clone().endOf('month');
    const sundayAfterMonth = lastDayInMonth.clone().endOf('week').add(2,'days');
    
    let days = [];
    let currentDay = mondayBeforeMonth.clone();

    while (!currentDay.isSame(sundayAfterMonth, 'day')) {
        days.push(currentDay.clone());
        currentDay.add(1, 'days');
    }

    return days;

}

export const segmentIntoWeeks = dayMoments => {
    let weeks = [];
    let currentWeek = [];

    for (let day of dayMoments) {
        currentWeek.push(day.clone());

        if (day.format('dddd') === 'Sunday') {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    }

    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }
    return weeks;
}

export const padWeekFront = (week, padWith = null) => {
    return [...Array(7 - week.length).fill(padWith), ...week];
}

export const padWeekBack = (week, padWith = null) => {
    return [...week, ...Array(7 - week.length).fill(padWith)];
}

export const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
