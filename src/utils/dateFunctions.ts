import { DateTime } from 'luxon';

export const months = (dateStart: DateTime, dateEnd: DateTime): any[] => {
    const months = [];
        
    console.log(dateEnd.diff(dateStart, 'months').months);
    while (dateEnd.diff(dateStart, 'months').months >= 0) {
        months.push(dateStart.toFormat('MM'))
        dateStart.plus({ months: 1 });
    }

    return months;
}

export const days = (dateStart: DateTime, dateEnd: DateTime): any[] => {
    const days = []
    console.log(dateEnd.diff(dateStart, 'days').days);

    while (dateEnd.diff(dateStart, 'days').days >= 0) {
        days.push(dateStart.toFormat('dd'))
        dateStart.plus({ days: 1 });
    }
    return days;
}
