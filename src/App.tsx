import React, { useState } from 'react';
import Logo from './components/logo';
import Form from './components/form';
import ParkingList from './components/packing-list';
import Stats from './components/stats';
import Item from './models/item';

function App() {
  const initialItems: Item[] = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ];

  const [items, setItems] = useState(initialItems);
  return (
    <div className='app'>
      <Logo />
      <Form />
      <ParkingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
