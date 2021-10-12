import React from 'react';
import { useSelector } from 'react-redux';
import Column from './Column/Column';
import { STATUSES } from '../../../types/enums';
import { getAllTodo } from '../TicketList/ticketList.selectors';
import './board.scss';

const Board = (): JSX.Element => {
  const items = useSelector(getAllTodo);

  return (
    <div className="board">
      <h1 className="board__title">Board</h1>
      <div className="board__container">
        <Column title="TODO" status={STATUSES.TODO} items={items} />
        <Column title="IN PROGRESS" status={STATUSES.IN_PROGRESS} items={items} />
        <Column title="DONE" status={STATUSES.DONE} items={items} />
      </div>
    </div>
  );
};

export default Board;
