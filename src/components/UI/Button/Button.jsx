import React from 'react';
import styles from './Button.module.scss'
import {clsx} from 'clsx'
const Button = ({children,
    primary,
    outlined,
    rounded,
    disabled,
    size = "medium",
    className,
    href = false,
    onClick,
    ...props
}) => {
    let Component = href ? "a" : "button"
    const classes = clsx("btn", className, {
        [styles.primary]: primary,
        [styles.outlined]: outlined,
        [styles.rounded]: rounded,
        [styles.disabled]: disabled
    })
  return (
    <Component>
      {children}
    </Component>
  );
};

export default Button;