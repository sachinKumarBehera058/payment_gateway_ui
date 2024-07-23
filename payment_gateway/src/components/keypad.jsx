import React from 'react';
import '../components/keypad.css';

const Keypad = ({ numbers, onKeyPress, onClear, onSubmit }) => {
  return (
    <div className="keypad">
      <div className="keypad-container">
        {numbers.map(number => (
          <button key={number} className="number" onClick={() => onKeyPress(number)}>{number}</button>
        ))}
        <button className="clear" onClick={onClear}>←</button>
        <button className="number" onClick={() => onKeyPress("0")}>0</button>
        <button className="submit" onClick={onSubmit}>✓</button>
      </div>
    </div>
  );
}

export default Keypad;



