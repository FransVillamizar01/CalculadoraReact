"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const handleInput = (value: string) => {
    switch (value) {
      case 'C':
        setDisplay('0');
        setExpression('');
        setCurrentValue('');
        break;
      case '=':
        try {
          const result = eval(expression);
          setDisplay(result.toString());
          setExpression(result.toString());
        } catch (error) {
          setDisplay('Error');
          setExpression('');
        }
        break;
      case '%':
        try {
          if (currentValue !== '') {
            const percentage = (parseFloat(currentValue) / 100).toString();
            setDisplay(percentage);
            setExpression(expression + '*' + percentage);
            setCurrentValue('');
          }
        } catch (error) {
          setDisplay('Error');
          setExpression('');
        }
        break;
      default:
        const newExpression = expression + value;
        setExpression(newExpression);
        setCurrentValue(newExpression);
        setDisplay(newExpression);
        break;
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
