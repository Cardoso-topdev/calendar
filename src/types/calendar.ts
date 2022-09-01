
export interface IEventData {
  [key: string]: {
    tl?: number,
    ev?: number,
    cm?: number,
    gu?: number,
    li?: number,
    lk?: number
  } | string
}
export interface IEvent {
  [key: string]: IEventData | string
}