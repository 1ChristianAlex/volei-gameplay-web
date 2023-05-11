class CalendarItem {
  public isToday: boolean;
  public isLastMonth: boolean;

  public isScheduled: boolean;
  public isCanceled: boolean;

  public day: number;

  constructor(data: CalendarItem) {
    Object.assign(this, data);
  }
}

export { CalendarItem };
