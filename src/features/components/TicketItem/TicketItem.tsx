import React from 'react';
import { useDispatch } from 'react-redux';
import { moveTo } from '../../../utils/moveTo';
import userIcon from '../../../assets/icons/userIcon.png';
import { STATUSES } from '../../../types/enums';
import './ticketItem.scss';

export interface TicketItemProps {
  title: string,
  status: STATUSES,
  id: number,
}

const TicketItem: React.FC<TicketItemProps> = ({ title, status, id }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div onClick={():void => { dispatch(moveTo[status](id - 1)); }} className="ticket__item">
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
