import React from 'react';
import Board from './features/components/Board/Board';
import TicketList from './features/components/TicketList/TicketList';

const App = (): JSX.Element => (
  <>
    <TicketList />
    <Board />
  </>
);

export default App;
