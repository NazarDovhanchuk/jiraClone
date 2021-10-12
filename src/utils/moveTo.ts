import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { statusDone, statusInProgress } from '../features/components/TicketList/ticketList.slice';
import { STATUSES } from '../types/enums';

export const moveTo: {
  [key in STATUSES]: ActionCreatorWithPayload<number, string>
} = {
  [STATUSES.TODO]: statusInProgress,
  [STATUSES.IN_PROGRESS]: statusDone,
  [STATUSES.DONE]: statusDone,
};
