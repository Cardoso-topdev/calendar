import React, { useState, useEffect } from 'react';
import { Calendar, Modal } from './components';
import { ModalContext } from './contexts';
import calendar from './assets/icons/calendar.png';
import './App.scss';
import { IEvent } from './types/calendar';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const data: IEvent = {
    "2022-08": {
      "1": {
        "tl": 288,
        "ev": 129,
        "cm": 3444,
        "lk": 3432,
        "gu": 32
      },
      "2": {
        "tl": 288,
        "ev": 121
      },
      "3": {
        "tl": 288,
        "ev": 83
      },
      "4": {
        "tl": 288,
        "ev": 63
      },
      "5": {
        "tl": 286,
        "ev": 24
      },
      "6": {
        "tl": 288,
        "ev": 115
      },
      "7": {
        "tl": 288,
        "ev": 30
      },
      "8": {
        "tl": 288,
        "ev": 111
      },
      "9": {
        "tl": 288,
        "ev": 25
      },
      "10": {
        "tl": 288,
        "ev": 111
      },
      "11": {
        "tl": 288,
        "ev": 118
      },
      "12": {
        "tl": 288,
        "ev": 66
      },
      "13": {
        "tl": 288,
        "ev": 73
      },
      "14": {
        "tl": 288,
        "ev": 40
      },
      "15": {
        "tl": 288,
        "ev": 23
      },
      "16": {
        "tl": 288,
        "ev": 21
      },
      "17": {
        "tl": 288,
        "ev": 23
      },
      "18": {
        "tl": 288,
        "ev": 13
      },
      "19": {
        "tl": 288,
        "ev": 31
      },
      "20": {
        "tl": 288,
        "ev": 60
      },
      "21": {
        "tl": 288,
        "ev": 23
      },
      "22": {
        "tl": 206,
        "ev": 37
      },
      "23": {
        "tl": 102,
        "ev": 17
      },
      "24": {
        "tl": 288,
        "ev": 63
      },
      "25": {
        "tl": 287,
        "ev": 39
      },
      "26": {
        "tl": 288,
        "ev": 55
      },
      "27": {
        "tl": 288,
        "ev": 20
      },
      "28": {
        "tl": 288,
        "ev": 53
      },
      "29": {
        "tl": 288,
        "ev": 60
      },
      "30": {
        "tl": 223,
        "ev": 12
      },
      "31": {
        "tl": 208,
        "ev": 68
      },
      "prev": "2022-07-31"
    },
    "first": "2009-04-01",
    "last": "2022-08-31"
  }

  const first = new Date(data.first as string).getFullYear();
  const last = new Date(data.last as string).getFullYear();
  const years = []
  for (let i = last; i >= first; i--) {
    years.push(i)
  }
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
