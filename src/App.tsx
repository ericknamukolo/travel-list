import React, { useState } from 'react';
import Logo from './components/logo';
import Form from './components/form';
import ParkingList from './components/packing-list';
import Stats from './components/stats';
import Item from './models/item';

function App() {
  const initialItems: Item[] = [
    { id: 1706444704988, description: 'Passports', quantity: 2, packed: false },
    { id: 1706444719585, description: 'Socks', quantity: 12, packed: false },
  ];

  const [items, setItems] = useState(initialItems);

  function addItem(e: any) {
    e.preventDefault();
    console.log(new Date().getTime());
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
      ].sort((a, b) => a.id - b.id);
    });
  }

  function removeItem(id: number) {
    setItems((prevItems) => {
      const newItems: Item[] = prevItems.filter((item) => item.id !== id);

      return newItems.sort((a, b) => a.id - b.id);
    });
  }

  function markItem(id: number) {
    setItems((prevItems) => {
      let updatedItem: Item | undefined = prevItems.find(
        (item) => item.id === id
      );
      updatedItem!.packed = !updatedItem!.packed;
      let updatedItems: Item[] = prevItems.filter((item) => item.id !== id);

      return [...updatedItems, updatedItem!].sort((a, b) => a.id - b.id);
    });
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAdd={addItem} />
      <ParkingList items={items} onRemove={removeItem} onMark={markItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;
