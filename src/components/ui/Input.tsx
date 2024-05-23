type TInputProps = {
  handleChange: (e : any) => void;
  value: string | number;
  title: string;
  name: string;
}

const Input = ({ handleChange, value, title, name } : TInputProps) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} className="absolute opacity-0 cursor-pointer" />
      <span className="checkmark text-sm"></span>
      <span className={`${name === 'category' ? 'text-sm' : 'text-base'}`}>{title}</span>{" "} <span className="text-sm pl-1 ">{name === 'rating' && 'Star'}</span>
    </label>
  );
};

export default Input;