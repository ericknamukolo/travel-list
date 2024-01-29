import React from 'react';
import Item from '../models/item';
import ItemC from './item';

const ParkingList: React.FC<{
  items: Item[];
  onRemove: (id: number) => void;
  onMark: (id: number, mark: string) => void;
}> = ({ items, onRemove, onMark }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return (
            <ItemC
              item={item}
              key={item.id}
              onRemove={onRemove}
              onMark={onMark}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ParkingList;
