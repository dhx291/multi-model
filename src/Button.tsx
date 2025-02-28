import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames'; // 推荐使用classnames库来合并类名

interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'small', 
  className = '',
  onClick 
}) => {
  return (
    <button
      className={classNames(
        styles.customButton,
        styles[size],
        className, // 允许外部传入额外的Tailwind类
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 