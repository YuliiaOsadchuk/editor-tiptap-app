import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.less';

type ButtonVariant = 'default' | 'contained' | 'outlined';
type ButtonType = 'default' | 'rounded';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  type?: ButtonType;
  children: ReactNode;
}

const IconButton: FC<ButtonProps> = ({
  variant = 'default',
  type = 'default',
  children,
  ...props
}) => (
  <button
    className={classNames(styles.iconButton, styles[variant], {
      [styles.rounded]: type === 'rounded',
    })}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
