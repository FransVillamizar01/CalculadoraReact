"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleInput = (value) => {
    if (value === 'C') {
      // Borrar todo
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        // Analizar la expresión y calcular el resultado
        const result = calculateExpression(expression);
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        // Manejar errores de expresión inválida
        setDisplay('Error');
        setExpression('');
      }
    } else {
      // Agregar el valor a la expresión
      const newExpression = expression + value;
      setExpression(newExpression);
      setDisplay(newExpression);
    }
  };

  const calculateExpression = (expression) => {
    // Reemplazar "%" con "/100" en la expresión
    const expressionWithDivision = expression.replace(/%/g, '/100');

    // Evaluar la expresión y devolver el resultado
    return eval(expressionWithDivision);
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
