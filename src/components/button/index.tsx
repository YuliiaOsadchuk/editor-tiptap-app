import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.less';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
