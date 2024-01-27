import React from 'react';
import Item from '../models/item';

const ItemC: React.FC<{ item: Item; onRemove: (id: number) => void }> = ({
  item,
  onRemove,
}) => {
  return (
    <li>
      {' '}
      <input type='checkbox' name='myCheckbox'></input>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemove(item.id)}>❌</button>
    </li>
  );
};

export default ItemC;
