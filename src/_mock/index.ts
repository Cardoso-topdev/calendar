import eventData from './db.json';

export const getEventData = () => new Promise((resolve) => {
  setTimeout(() => {
    const { data } = eventData;
      resolve(data);
  }, 1000);
});