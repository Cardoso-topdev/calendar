import {
  startOfWeek,
  format,
  addDays
} from 'date-fns';

export const WeekDays = () => {
  const firstDOW = startOfWeek(new Date());
  const shortWeekDaysArray = Array.from(Array(7))
    .map((e, i) => format(addDays(firstDOW, i), 'EEEEEE'));

  return (
    <tr>
      {
        shortWeekDaysArray.map(day => (
          <th key={day}>{day}</th>
        ))
      }
    </tr>
  );
}