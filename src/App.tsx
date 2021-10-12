/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import './App.css';
import Board from './features/components/Board/Board';
import TicketList from './features/components/TicketList/TicketList';

const App = (): JSX.Element => (
  <div>
    <TicketList />
    <Board />
  </div>
);

export default App;
