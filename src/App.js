import React from 'react';
import CreateTicket from './components/CreateTicket';
import TicketList from './components/TicketList';

function App() {
  return (
    <div className="App">
      <h1>Ticket System</h1>
      <CreateTicket />
      <TicketList />
    </div>
  );
}

export default App;