import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.less';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  placeholder,
  onChange,
  onBlur,
  ...props
}) => (
  <input
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    className={styles.input}
    tabIndex={0}
    {...props}
  />
);

export default Input;
