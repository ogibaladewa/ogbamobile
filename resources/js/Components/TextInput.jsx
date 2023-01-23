import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    name,
    id,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    checked,
    hidden,
    placeholder,
  },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={`rounded-md shadow-sm ` + className}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        checked={checked}
        hidden={hidden}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
});
