// src/components/AdvancedCalculator.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdvancedCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const appendValue = (val) => {
    setExpression((prev) => prev + val);
  };

  const clear = () => {
    setExpression('');
    setResult('0');
  };

  const calculate = () => {
    try {
      // Replace ^ with ** and % with /100 for evaluation
      const formatted = expression.replace(/%/g, '/100').replace(/\^/g, '**');
      const evalResult = eval(formatted); // Caution: Use with trusted input only
      setResult(evalResult);
      setExpression(evalResult.toString());
    } catch (error) {
      alert('Invalid Expression');
      clear();
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: 400 }}>
        <div className="card-body">
          <h3 className="text-center mb-3">Advanced Calculator</h3>

          <div className="bg-light p-2 text-end mb-3 rounded" id="display" style={{ fontSize: '1.5rem' }}>
            {expression || '0'}
          </div>

          <div className="row g-2">
            {[
              ['C', '(', ')', '/'],
              ['7', '8', '9', '*'],
              ['4', '5', '6', '-'],
              ['1', '2', '3', '+'],
              ['%', '0', '^', '=']
            ].map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((btn) => (
                  <div className="col-3" key={btn}>
                    <button
                      className={`btn w-100 ${btn === '=' ? 'btn-success' : btn === 'C' ? 'btn-secondary' : '+-*/%^'.includes(btn) ? 'btn-danger' : 'btn-light'}`}
                      onClick={() => {
                        if (btn === 'C') clear();
                        else if (btn === '=') calculate();
                        else appendValue(btn);
                      }}
                    >
                      {btn === '*' ? '×' : btn === '/' ? '÷' : btn}
                    </button>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="alert alert-info text-center mt-4 mb-0">
            <strong>Result:</strong> {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCalculator;
