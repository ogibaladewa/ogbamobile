export default function InputLabel({ forInput, value, className, children }) {
  return (
    <label htmlFor={forInput} className={"text-slate-200 " + className}>
      {value ? value : children}
    </label>
  );
}
