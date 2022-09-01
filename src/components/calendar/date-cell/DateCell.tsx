import { useContext } from 'react';
import { IModalContext, ModalContext } from '../../../contexts';
import { IEventData } from '../../../types/calendar';
import './dateCell.scss';

interface IDateCellProps {
  date: string,
  events: IEventData | undefined
};
export const DateCell = ({ date, events }: IDateCellProps) => {
  const {setOpen} = useContext<IModalContext>(ModalContext);
  
  return (
    <div className="date-container" onClick={() => setOpen(false)}>
      <div className="date-container__number">
        <span>{date}</span>
      </div>
      <div className="date-container__codes">
        <div className="date-container__codes__left">
          <span className="time-lapse">
            <>{events?.tl}</>
          </span>
          <span className="comments">
            <>{events?.cm}</>
          </span>
          <span className="guest-uploads">
            <>{events?.gu}</>
          </span>
        </div>
        <div className="date-container__codes__right">
          <span className="events">
            <>{events?.ev}</>
          </span>
          <span className="liked-by-me">
            <>{events?.lk}</>
          </span>
          <span className="liked">
            <>{events?.li}</>
          </span>
        </div>
      </div> 
    </div>
  );
} 