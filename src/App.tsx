import React, { useState } from 'react';
import Logo from './components/logo';
import Form from './components/form';
import ParkingList from './components/packing-list';
import Stats from './components/stats';
import Item from './models/item';

function App() {
  const initialItems: Item[] = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
  ];

  const [items, setItems] = useState(initialItems);

  function addItem(e: any) {
    e.preventDefault();
    if (e.target[1].value === '') return alert('Input an item name');
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime(),
          description: e.target[1].value,
          packed: false,
          quantity: e.target[0].value,
        },
      ];
    });
  }

  function removeItem(id: number) {
    setItems((prevItems) => {
      const newItems: Item[] = prevItems.filter((item) => item.id !== id);

      return newItems;
    });
    console.log(id);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAdd={addItem} />
      <ParkingList items={items} onRemove={removeItem} />
      <Stats />
    </div>
  );
}

export default App;
