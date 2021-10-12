/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../../types/enums';
import { getAllTodo } from '../../TicketList/ticketList.selector';

import userIcon from '../../../../icons/userIcon.png';

import './style.scss';

const Done = (): JSX.Element => {
  const todoInDone = useSelector(getAllTodo);

  const filterTodo = todoInDone.filter((todo) => todo.status === STATUSES.DONE);

  useEffect(() => {

  }, [filterTodo]);

  return (
    <div className="done">
      {filterTodo.map((el) => (
        <div key={el.id} className="done__item">
          <div className="done__image">
            <img src={userIcon} alt="User Icon" />
          </div>
          <h4 className="done__title">{el.title}</h4>
          <p className="done__status">
            {el.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Done;
