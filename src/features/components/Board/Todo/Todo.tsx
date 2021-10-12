/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../../types/enums';
import TicketItem from '../../TicketList/TicketItem/TicketItem';
import { getAllTodo } from '../../TicketList/ticketList.selector';

const Todo = (): JSX.Element => {
  const allTodos = useSelector(getAllTodo);
  const filterTodo = allTodos.filter((todo) => todo.status !== STATUSES.IN_PROGRESS && todo.status !== STATUSES.DONE);

  useEffect(() => {

  }, [filterTodo]);

  return (
    <div className="todo__container">
      {filterTodo.map((el) => (
        <TicketItem
          key={el.id}
          id={el.id}
          title={el.title}
          status={el.status}
        />
      ))}
    </div>
  );
};

export default Todo;
