import React from 'react';

const Form: React.FC = () => {
  return (
    <form className='add-form'>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type='text' placeholder='Item..' />
      <button>Add</button>
    </form>
  );
};

export default Form;
