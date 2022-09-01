import { useContext } from 'react';
import { IModalContext, ModalContext } from '../../../contexts';
import { EventDataType } from '../../../types/calendar';
import { filterCellData } from '../../../utils';
import './dateCell.scss';

interface IDateCellProps {
  date: string,
  event?: EventDataType
};
export const DateCell = ({ date, event }: IDateCellProps) => {
  const {setOpen} = useContext<IModalContext>(ModalContext);
  
  return (
    <div className="date-container" onClick={() => setOpen(false)}>
      <div className="date-container__number">
        <span>{date}</span>
      </div>
      <div className="date-container__codes">
        <div className="date-container__codes__left">
          <span className="time-lapse">
            {filterCellData(event?.tl)}
          </span>
          <span className="comments">
            {filterCellData(event?.cm)}
          </span>
          <span className="guest-uploads">
            {filterCellData(event?.gu)}
          </span>
        </div>
        <div className="date-container__codes__right">
          <span className="events">
            {filterCellData(event?.ev)}
          </span>
          <span className="liked-by-me">
            {filterCellData(event?.lk)}
          </span>
          <span className="liked">
            {filterCellData(event?.li)}
          </span>
        </div>
      </div> 
    </div>
  );
} 