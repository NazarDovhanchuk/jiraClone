import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TicketItem from '../TicketItem/TicketItem';
import { getAllTodos } from './ticketList.slice';
import { getAllTodo } from './ticketList.selectors';
import { STATUSES } from '../../../types/enums';

import './ticketList.scss';

const sortingOrder: STATUSES[] = [
  STATUSES.DONE,
  STATUSES.IN_PROGRESS,
  STATUSES.TODO,
];

const TicketList = (): JSX.Element => {
  const dispatch = useDispatch();
  const todo = useSelector(getAllTodo);
  const sortedList = [...todo].sort((a, b) => sortingOrder.indexOf(a.status) - sortingOrder.indexOf(b.status));

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="ticket__list">
      <h1 className="ticket__list_title">Ticket List</h1>
      <div className="ticket__list_container">
        {sortedList.map((item) => (
          <TicketItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
