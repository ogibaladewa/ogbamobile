import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  {
    name,
    id,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    checked,
  },
  ref
) {
  const textarea = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      textarea.current.focus();
    }
  }, []);

  return (
    <>
      <textarea
        name={name}
        id={id}
        value={value}
        className={
          `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
          className
        }
        ref={textarea}
        autoComplete={autoComplete}
        required={required}
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
});
