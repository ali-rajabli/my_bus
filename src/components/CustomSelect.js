import React from "react";
import Select from "react-select";

const CustomSelect = ({
  isDisabled,
  onChange,
  name,
  options,
  value,
  className,
  placeholder,
  id,
}) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <Select
      id={id}
      isDisabled={isDisabled}
      className={className}
      name={name}
      placeholder={placeholder}
      value={defaultValue(options, value)}
      onChange={onChange}
      options={options}
    />
  );
};
export default CustomSelect;
