import React from 'react';
import {
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  format,
  addDays
} from 'date-fns';
import { IEvent, IEventData } from '../../../types/calendar';
import { DateCell } from '../date-cell';

const dateFormat:string = "d";

interface IMonthProps {
  month: Date,
  events: IEvent
}
export const Month = ({ month, events }: IMonthProps) => {
  const eventKey: string = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
  const currentMonthEvents: IEventData = events[eventKey] as IEventData;

  const monthStart: Date = startOfMonth(month);
  const monthEnd: Date = endOfMonth(monthStart);
  const startDate: Date = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);

  const rows: Array<React.ReactNode> = [];
  let days: Array<React.ReactNode> = [];
  let day: Date = startDate;
  let formattedDate: string = "";

  while (day <= endDate) {
    for (let i: number = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const isDateInCurrentMonth: boolean = day >= monthStart && day <= monthEnd;
      days.push(
        <td key={day.toString()} className={isDateInCurrentMonth ? '' : 'empty'}>
          {
            isDateInCurrentMonth
              ? <DateCell
                  date={formattedDate}
                  events={currentMonthEvents?.[formattedDate as keyof typeof currentMonthEvents] as IEventData}
                />
              : ''
          }
        </td>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <tr className="row" key={day.toString()}>
        {days}
      </tr>
    );
    days = [];
  }
  return (
    <>
      {rows}
    </>
  );
}