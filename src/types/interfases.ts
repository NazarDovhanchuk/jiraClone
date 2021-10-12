import { STATUSES } from './enums';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  status: STATUSES,
}
