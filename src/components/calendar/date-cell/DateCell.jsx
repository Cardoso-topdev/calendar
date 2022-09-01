import React, { useContext } from 'react';
import { ModalContext } from '../../../contexts';
import './dateCell.scss';

export const DateCell = ({ date, events }) => {
  const setOpen = useContext(ModalContext);
  return (
    <div className="date-container" onClick={() => setOpen(false)}>
      <div className="date-container__number">
        <span>{date}</span>
      </div>
      <div className="date-container__codes">
        <div className="date-container__codes__left">
          <span className="time-lapse">{events?.tl}</span>
          <span className="comments">{events?.cm}</span>
          <span className="guest-uploads">{events?.gu}</span>
        </div>
        <div className="date-container__codes__right">
          <span className="events">{events?.ev}</span>
          <span className="liked-by-me">{events?.lk}</span>
          <span className="liked">{events?.li}</span>
        </div>
      </div> 
    </div>
  );
} 