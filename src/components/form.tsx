import React, { useState } from 'react';

const Form: React.FC<{ onAdd: (e: any | null) => void }> = ({ onAdd }) => {
  const [des, setDes] = useState('');
  const [option, setOption] = useState('1');

  function addItem() {
    // onAdd();
  }
  return (
    <form className='add-form' onSubmit={onAdd}>
      <h3>What do you need for your trip?</h3>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item..'
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
