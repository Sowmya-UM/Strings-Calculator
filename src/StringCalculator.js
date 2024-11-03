import React, { useState } from 'react';
import './style.css'; // Ensure your CSS is correctly imported
import add from './StringCalculatorLogic'; // Import the logic for calculation

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const calculate = () => {
        try {
            setError(''); // Clear previous errors
            const calculationResult = add(input);
            setResult(`Result: ${calculationResult}`);
        } catch (err) {
            setResult('');
            setError(err.message);
        }
    };

    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers (e.g., 1,2 or //;\n1;2)"
            />
            <button onClick={calculate}>Calculate</button>
            <div id="result">{result}</div>
            <div id="error" className="error">{error}</div>
        </div>
    );
};

export default StringCalculator;
