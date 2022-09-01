import {
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  format,
  addDays
} from 'date-fns';
import { DateCell } from '../date-cell';

const dateFormat = "d";

export const Month = ({ month, events }) => {
  const eventKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
  const currentMonthEvents = events[eventKey];

  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const isDateInCurrentMonth = day >= monthStart && day <= monthEnd;
      days.push(
        <td key={day} className={isDateInCurrentMonth ? '' : 'empty'}>
          {
            isDateInCurrentMonth
              ? <DateCell date={formattedDate} events={currentMonthEvents?.[formattedDate]}/>
              : ''
          }
        </td>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <tr className="row" key={day}>
        {days}
      </tr>
    );
    days = [];
  }
  return rows;
}