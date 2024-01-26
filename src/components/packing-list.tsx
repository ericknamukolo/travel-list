import React from 'react';
import Item from '../models/item';

const ParkingList: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return <li>{item.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default ParkingList;
