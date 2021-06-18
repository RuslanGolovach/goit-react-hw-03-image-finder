import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, text }) => (
  <button className={styles.Button} type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
