import React from 'react';
import ReactDom from 'react-dom';
import './modal.scss';
import calendar from '../../assets/icons/calendar.png';

interface IModal {
  setOpen: (open: boolean) => void,
  children: React.ReactNode
}
export const Modal = ({ setOpen, children }: IModal) => {
  const close = () => {
    setOpen(false);
  }
  return (
    ReactDom.createPortal(
      <>
        <div className="modal-shadow" onClick={close}></div>
        <div className="modal">
          <div className="modal-header">
            <div onClick={close}>
              <img src={calendar} alt="calendar" />
              <span>Calendar</span>
            </div>
            <i className="fa-solid fa-xmark" onClick={close}></i>
          </div>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </>,
    document.getElementById('app-modal') as HTMLElement)
  );
}