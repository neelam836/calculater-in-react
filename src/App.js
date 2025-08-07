import React, { useState } from 'react';
import AdvancedCalculator from './components/AdvancedCalculator';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  return (
    <div className="App">
      <h1>🧮 My Calculator App</h1>
      <p>Choose a calculator:</p>

      <div className="calculator-options">
        <button onClick={() => setSelectedCalculator('basic')}>
         Basic Calculator
        </button>
        <span className="divider">|</span>
        <button onClick={() => setSelectedCalculator('advanced')}>
          Advanced Calculator
        </button>
      </div>

      <div className="calculator-wrapper">
        <div className="calculator-container">
          {selectedCalculator === 'basic' && <Calculator />}
          {selectedCalculator === 'advanced' && <AdvancedCalculator />}
          {!selectedCalculator && (
            <p className="select-msg">🔽 Please select a calculator to begin.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
