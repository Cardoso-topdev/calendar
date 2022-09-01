import { EventListType } from '../types/calendar';
import eventData from './db.json';

export const getEventData = () => new Promise<EventListType>((resolve) => {
  setTimeout(() => {
    const { data } = eventData;
      resolve(data as unknown as EventListType);
  }, 3000);
});