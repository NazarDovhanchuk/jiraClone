/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { statusInProgress } from '../../../../store/slice';
import { TicketItemProps } from '../../../../types/interfases';

import userIcon from '../../../../icons/userIcon.png';
import './style.scss';

const TicketItem = ({ title, status, id }: TicketItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const handlerOnClick = () => {
    dispatch(statusInProgress(id - 1));
  };

  return (
    <div onClick={handlerOnClick} className="ticket__item">
      <div className="ticket__image">
        <img src={userIcon} alt="User Icon" />
      </div>
      <h4 className="ticket__title">{title}</h4>
      <p className="ticket__status">
        {status}
      </p>
    </div>
  );
};

export default TicketItem;
