import { useEffect, useState } from 'react';
import { Calendar, Modal } from './components';
import { ModalContext } from './contexts';
import calendar from './assets/icons/calendar.png';
import { EventListType } from './types/calendar';
import { getAvailableYears } from './utils';
import { getEventData } from './_mock';
import './App.scss';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eventData, setEventData] = useState<EventListType>({} as EventListType);
  const [years, SetYears] = useState<Array<number>>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      setIsLoading(true);
      const data = await getEventData();
      setEventData(data as EventListType);
      SetYears(getAvailableYears(data as EventListType));
      setIsLoading(false);
    };

    fetchEventData();
  }, [])
  
  return (
    <div className="App">
      {
        !isLoading && (
          <>
            <img src={calendar} alt="calendar" onClick={() => setOpen(true)} />
            {open && (
              <Modal
                setOpen={setOpen}
              >
                <ModalContext.Provider value={{ setOpen }}>
                  <Calendar events={eventData} years={years} />
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
