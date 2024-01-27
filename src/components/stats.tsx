import React from 'react';
import Item from '../models/item';

const Stats: React.FC<{ items: Item[] }> = ({ items }) => {
  function getPercent(): number {
    let finished: number = items.filter((item) => item.packed === true).length;
    let total: number = items.length;
    if (total === 0) return 0;
    return (finished / total) * 100;
  }
  return (
    <footer className='stats'>
      <em>
        You have {items.length} items on your list, and you have already packed
        {` ${items.filter((item) => item.packed === true).length}`} (
        {getPercent().toFixed(1)}%)
      </em>
    </footer>
  );
};

export default Stats;
