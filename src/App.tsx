import React, { useState, useEffect } from 'react';
import { Calendar, Modal } from './components';
import { ModalContext } from './contexts';
import calendar from './assets/icons/calendar.png';
import './App.scss';
import { IEvent } from './types/calendar';

const url = "https://api.netcams.io/viewer/sandyhill/barns/calendar";
const options = {
  headers: {
    Authorization: "origin: http://localhost:3000"
  },
  method: 'get'
};

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IEvent>({})
  const years: Array<number> = []
  let first: number;
  let last: number;

  useEffect(() => {
    setIsLoading(true)
    fetch(url, options)
      .then(response => response.json())
      .then(json => {
        setData(json);
        first = new Date(data.first as string).getFullYear();
        last = new Date(data.last as string).getFullYear();
        for (let i = last; i >= first; i--) {
          years.push(i)
        }
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {
        isLoading
          ? 'Loading...'
          : 
          <>
            <img src={calendar} alt="calendar" onClick={() => setOpen(true)} />
            {open && (
              <Modal
                setOpen={setOpen}
              >
                <ModalContext.Provider value={{ setOpen }}>
                  <Calendar events={data} years={years} />
                </ModalContext.Provider>
              </Modal>
            )}
          </>
      }
    </div>
  );
}

export default App;
