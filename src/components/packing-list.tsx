import React from 'react';
import Item from '../models/item';
import ItemC from './item';

const ParkingList: React.FC<{
  items: Item[];
  onRemove: (id: number) => void;
}> = ({ items, onRemove }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return <ItemC item={item} key={item.id} onRemove={onRemove} />;
        })}
      </ul>
    </div>
  );
};

export default ParkingList;
