import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TicketItem from './TicketItem/TicketItem';

import { getAllTodos } from '../../../store/slice';
import { getAllTodo } from './ticketList.selector';

import './style.scss';

const TicketList = (): JSX.Element => {
  const dispatch = useDispatch();

  const allTodos = useSelector(getAllTodo);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="ticket__list">
      <h1 className="ticket__list_title">Ticket List</h1>
      <div className="ticket__list_container">
        {allTodos.map((el) => (
          <TicketItem
            key={el.id}
            id={el.id}
            title={el.title}
            status={el.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
