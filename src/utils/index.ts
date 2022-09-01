import { EventListType } from "../types/calendar";

export const getAvailableYears = (data: EventListType): Array<number> => {
  const first: number = new Date(data.first).getFullYear();
  const last: number = new Date(data.last).getFullYear();
  const years: Array<number> = [];
  for (let i: number = last; i >= first; i--) {
    years.push(i);
  }
  return years;
}