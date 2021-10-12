import React from 'react';
import Todo from './Todo/Todo';

import './style.scss';
import InProgress from './InProgress/InProgress';
import Done from './Done/Done';

const Board = (): JSX.Element => (
  <div className="board">
    <h1 className="board__title">Board</h1>
    <div className="board__container">
      <Todo />
      <InProgress />
      <Done />
    </div>
  </div>
);

export default Board;
