import { STATUSES } from './enums';

export interface AllTodos {
  userId: number,
  id: number,
  title: string,
  status: STATUSES,
}

export interface Todos {
  todos: AllTodos[],
}

export interface TicketItemProps {
  title: string,
  status: string,
  id: number,
}
