import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type, classNameLabel, classNameInput, ...props },
  ref
) {
  return (
    <>
      <label className={classNameLabel}>{label}</label>
      {type === "text-area" ? (
        <textarea ref={ref} id={label} className={classNameInput} />
      ) : (
        <input
          ref={ref}
          className={classNameInput}
          type={type}
          id={label}
          {...props}
        />
      )}
    </>
  );
});

export default Input;
