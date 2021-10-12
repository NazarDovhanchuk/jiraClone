import React from 'react';
import TicketItem from '../../TicketItem/TicketItem';
import { STATUSES } from '../../../../types/enums';
import { Todo } from '../../../../types/interfases';

interface ColumnProps {
  title: string;
  status: STATUSES;
  items: Todo[];
}

const Column: React.FC<ColumnProps> = ({ title, status, items }): JSX.Element => {
  const filterTodo = items.filter((todo) => todo.status === status);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <div className="progress">
        {filterTodo.map((el) => (
          <TicketItem key={el.id} title={el.title} status={el.status} id={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Column;
