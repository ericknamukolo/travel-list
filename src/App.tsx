import React from 'react';
import Logo from './components/logo';
import Form from './components/form';
import ParkingList from './components/packing-list';
import Stats from './components/stats';

function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

export default App;
