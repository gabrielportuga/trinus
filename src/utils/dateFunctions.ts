import { DateTime } from 'luxon';

export const months = (dateStart: DateTime, dateEnd: DateTime): any[] => {
    const months = [];
    let date = dateStart;

    while (Math.round(dateEnd.diff(date, 'months').months) >= 0) {
        console.log(Math.round(dateEnd.diff(date, 'months').months));
        months.push(date.toFormat('yyyy/MM'))
        date = date.plus({ months: 1 });
    }
    return months;
}

export const days = (dateStart: DateTime, dateEnd: DateTime): any[] => {
    const days = [];
    let date = dateStart;

    while (Math.round(dateEnd.diff(date, 'days').days) >= 0) {
        days.push(date.toFormat('yyyy/MM/dd'))
        date = date.plus({ months: 1 });
    }
    return days;
}
