export type EventDataType = {
  tl?: number;
  ev?: number;
  cm?: number;
  gu?: number;
  li?: number;
  lk?: number;
}

type EventDataListType = {
  [key: string]: EventDataType;
}

type EventRange = {
  first: string;
  last: string;
}

export type EventType = EventDataListType & {
  prev: string;
}

export type EventListType = EventRange & {
  [key: string]: EventType;
}