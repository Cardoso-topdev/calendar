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

export const filterCellData = (data: number | undefined): number | string => {
  const MAX = 9999;
  const MIN = 0;
  if (!data || data < MIN) return ''
  if (data > MAX) return MAX
  return data;
}