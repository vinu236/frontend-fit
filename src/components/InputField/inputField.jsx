import PropTypes from "prop-types"
const InputField = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={className} required />
      {label && <label htmlFor="">{label}</label>}
    </>
  );
};

InputField.propTypes={
  value:PropTypes.string,
  label:PropTypes.string,
  name:PropTypes.string,
  placeholder:PropTypes.string,
  onChange:PropTypes.func.isRequired
}
InputField.defaultProps={
  value:"",
  label:"",
  placeholder:"",
  type:"text",
}

export default InputField;