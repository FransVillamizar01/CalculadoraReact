"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [base, setBase] = useState(100);

  const handleInput = (value: string) => {
    if (value === 'C') {
      // Borrar todo
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        // Evaluar la expresión y calcular el porcentaje
        const result = eval(expression);
        const percentage = (result / base) * 100;
        const roundedPercentage = Math.round(percentage);
        setDisplay(roundedPercentage.toString());
        setExpression(roundedPercentage.toString());
      } catch (error) {
        // Manejar errores de expresión inválida
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === '%') {
      // Cambiar la base al último número en la expresión
      setBase(parseFloat(expression));
      setExpression(expression + value);
      setDisplay(expression + value);
    } else {
      // Agregar el valor a la expresión
      const newExpression = expression + value;
      setExpression(newExpression);
      setDisplay(newExpression);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} value={display} disabled />
        <div className={styles.buttons}>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={() => handleInput('7')}>7</button>
            <button className={styles.button} onClick={() => handleInput('8')}>8</button>
            <button className={styles.button} onClick={() => handleInput('9')}>9</button>
            <button className={styles.button} onClick={() => handleInput('+')}>+</button>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={() => handleInput('4')}>4</button>
            <button className={styles.button} onClick={() => handleInput('5')}>5</button>
            <button className={styles.button} onClick={() => handleInput('6')}>6</button>
            <button className={styles.button} onClick={() => handleInput('-')}>-</button>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={() => handleInput('1')}>1</button>
            <button className={styles.button} onClick={() => handleInput('2')}>2</button>
            <button className={styles.button} onClick={() => handleInput('3')}>3</button>
            <button className={styles.button} onClick={() => handleInput('*')}>*</button>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={() => handleInput('0')}>0</button>
            <button className={styles.button} onClick={() => handleInput('C')}>C</button>
            <button className={styles.button} onClick={() => handleInput('/')}>/</button>
            <button className={styles.button} onClick={() => handleInput('%')}>%</button>
            <button className={styles.button} onClick={() => handleInput('=')}>=</button>
          </div>
        </div>
      </div>
    </main>
  );
}
