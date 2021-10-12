/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../../../types/enums';
import { getAllTodo } from '../../TicketList/ticketList.selector';

import userIcon from '../../../../icons/userIcon.png';

import './style.scss';
import { statusDone } from '../../../../store/slice';

const InProgress = (): JSX.Element => {
  const dispatch = useDispatch();
  const todoInProgress = useSelector(getAllTodo);

  const filterTodo = todoInProgress.filter((todo) => todo.status === STATUSES.IN_PROGRESS);

  useEffect(() => {

  }, [filterTodo]);

  return (
    <div className="progress">
      {filterTodo.map((el) => (
        <div key={el.id} onClick={(): void => { dispatch(statusDone(el.id - 1)); }} className="progress__item">
          <div className="progress__image">
            <img src={userIcon} alt="User Icon" />
          </div>
          <h4 className="progress__title">{el.title}</h4>
          <p className="progress__status">
            {el.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InProgress;
