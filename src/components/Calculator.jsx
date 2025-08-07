import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === '%') {
      try {
        const result = eval(input) / 100;
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    'C', '%', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.', 
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: '300px' }}>
        <h4 className="text-center mb-3">React Calculator</h4>
        <input
          type="text"
          className="form-control mb-3 text-end"
          value={input}
          readOnly
        />
        <div className="row g-2">
          {buttons.map((btn, idx) => (
            <div key={idx} className="col-3">
              <button
                className={`btn btn-${btn === '=' ? 'success' : btn === 'C' ? 'danger' : 'secondary'} w-100`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
