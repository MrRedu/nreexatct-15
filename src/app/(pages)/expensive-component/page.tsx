'use client'
import React, { useState, useMemo } from 'react';

export default function ExpensiveComponentPage() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Memoize expensive calculation
  const expensiveCalculation = useMemo(
    () => {
      console.log("Calculating...");
      let sum = 0;
      for (let i = 0; i < 1000000000; i++) {
        sum += i;
      }
      return sum;
    }, [count]); // Recalculate only when `count` changes

  // Cálculo costoso sin memoización
  // const expensiveCalculation = () => {
  //   console.log("Calculating...");
  //   let sum = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // };

  return (
    <div>
      <h1>Expensive Calculation: {expensiveCalculation}</h1>  {/* <- Usando Memo */}
      {/* <h1>Expensive Calculation: {expensiveCalculation()}</h1> <- Sin usar Memo */}
      <button
        className='bg-blue-500'
        onClick={() => setCount(count + 1)}
      >
        Increment Count ({count})
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};
