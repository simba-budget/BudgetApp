export interface Time {
  id: number;
  date: string;
  timeFrom: string;
  timeTo: string;
}

export interface Section<T> {
  title: string;
  subtitle?: string;
  data: T[];
}
