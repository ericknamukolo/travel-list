import React from 'react';
import Item from '../models/item';

const ItemC: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <li>
      {' '}
      <input type='checkbox' name='myCheckbox'></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default ItemC;
