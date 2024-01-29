import React from 'react';
import Item from '../models/item';

const ItemC: React.FC<{
  item: Item;
  onRemove: (id: number) => void;
  onMark: (id: number, mark: string) => void;
}> = ({ item, onRemove, onMark }) => {
  return (
    <li>
      <input
        type='checkbox'
        name='myCheckbox'
        checked={item.packed}
        value={item.packed ? 'on' : 'off'}
        onChange={(val) => onMark(item.id, val.target.value)}
      ></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemove(item.id)}>❌</button>
    </li>
  );
};

export default ItemC;
