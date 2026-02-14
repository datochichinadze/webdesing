import React from "react";
import styles from "./Inpur.module.css";
import { InputConfig } from "./interfase/interfase-props";

const Input = React.forwardRef<HTMLInputElement, InputConfig>(
  ({ placeholder, type, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={styles.inputStyle}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
