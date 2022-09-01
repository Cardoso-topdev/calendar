import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths
} from 'date-fns';
import { setYear } from 'date-fns/esm';
import { WeekDays } from './week-days';
import { Month } from './month';
import { IEvent } from '../../types/calendar';
import prev from '../../assets/icons/prev.png';
import next from '../../assets/icons/next.png';
import './calendar.scss';

interface ICalendarProps {
  years: Array<number>,
  events: IEvent
}
export const Calendar = ({ years, events }: ICalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const nextMonth: () => void = () => {
    const nextMonth: Date = addMonths(currentMonth, 1);
    if (nextMonth > new Date(events.last as string)) return;
    setCurrentMonth(nextMonth);
  }

  const prevMonth: () => void = () => {
    const prevMonth: Date = subMonths(currentMonth, 1);
    if (prevMonth < new Date(events.first as string)) return;
    setCurrentMonth(prevMonth);
  }

  const jumpToYear: (year: number) => void = (year: number) => {
    setCurrentMonth(setYear(currentMonth, year));
  }
  
  return (
    <div className="calendar">
      <div className="calendar-month">
        <table>
          <thead>
            <WeekDays />
          </thead>
          <tbody>
            <Month
              month={currentMonth}
              events={events} />
          </tbody>
        </table>
      </div>
      <div className="calendar-control">
        <div className="calendar-control__month">
          <img
            src={prev}
            alt="prev"
            onClick={prevMonth} />
          <span>
            {format(currentMonth, 'LLLL')}
          </span>
          <img
            src={next}
            alt="next"
            onClick={nextMonth} />
        </div>
        <div className="calendar-control__year">
          {
            years.map(year => {
              return (
                <div key={year}>
                  <span
                    className={currentMonth.getFullYear() === year ? 'selected': ''}
                    onClick={() => jumpToYear(year)}
                  >
                    {year}
                  </span>
                </div>
              )
            })
          }
        </div>
        <div className="calendar-control__indicators desktop">
          <div>
            <span className="time-lapse">Time-Lapse</span>
            <span className="events">Events</span>
            <span className="comments">Comments</span>
            <span className="guest-uploads">Guest Uploads</span>
          </div>
          <div>
            <span className="liked">Liked</span>
            <span className="liked-by-me">Liked by Me</span>
          </div>
        </div>
        <div className="calendar-control__indicators mobile">
          <div>
            <span className="time-lapse">Time-Lapse</span>
            <span className="events">Events</span>
          </div>
          <div>
            <span className="liked">Liked</span>
            <span className="liked-by-me">Liked by Me</span>
          </div>
          <div>
            <span className="comments">Comments</span>
            <span className="guest-uploads">Guest Uploads</span>
          </div>
        </div>
      </div>
    </div>
  );
}