import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectOption(
  {
    selectTitle,
    name,
    id,
    className,
    isFocused,
    handleChange,
    hidden,
    datalist,
    defaultValue,
    optionValue,
    optionName,
    required,
  },
  ref
) {
  const select = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      select.current.focus();
    }
  }, []);

  return (
    <>
      <select
        name={name}
        id={id}
        className={className}
        ref={select}
        onChange={(e) => handleChange(e)}
        required={required}
        hidden={hidden}
        defaultValue={defaultValue}
      >
        <option value="" className={className}>
          -- Pilih {selectTitle} --
        </option>
        {datalist
          ? datalist.map((data, i) => {
              return (
                <option key={i} value={data[optionValue]} className={className}>
                  {data[optionName]}
                </option>
              );
            })
          : ""}
      </select>
    </>
  );
});
