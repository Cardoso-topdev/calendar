import React, { useState, useEffect } from 'react';
import { Calendar, Modal } from './components';
import { ModalContext } from './contexts';
import calendar from './assets/icons/calendar.png';
import './App.scss';

const url = "https://api.netcams.io/viewer/sandyhill/barns/calendar";
const options = {
  headers: {
    Authorization: "origin: http://localhost:3000"
  },
  method: 'get'
};

function App() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})
  const first = new Date(data.first).getFullYear();
  const last = new Date(data.last).getFullYear();
  const years = []
  for(let i = last; i >= first; i --) {
    years.push(i)
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
  }, [isLoading])
  return (
    <div className="App">
      {
        isLoading
          ? 'Loading...'
          : (
          <>
            <img src={calendar} alt="calendar" onClick={() => setOpen(true)} />
            {open && (
              <Modal
                setOpen={setOpen}
              >
                <ModalContext.Provider value={setOpen}>
                  <Calendar events={data} years={years}/>
                </ModalContext.Provider>
              </Modal>
            )}
          </>

          )
      }
    </div>
  );
}

export default App;
 