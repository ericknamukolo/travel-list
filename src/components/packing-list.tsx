import React from 'react';
import Item from '../models/item';
import ItemC from './item';

const ParkingList: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return <ItemC item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ParkingList;
