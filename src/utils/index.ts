import { IEvent } from "../types/calendar";

export const getAvailableYears = (data: IEvent): Array<number> => {
  const first: number = new Date(data.first as string).getFullYear();
  const last: number = new Date(data.last as string).getFullYear();
  const years: Array<number> = [];
  for (let i: number = last; i >= first; i--) {
    years.push(i);
  }
  return years;
}