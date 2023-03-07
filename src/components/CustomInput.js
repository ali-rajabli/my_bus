import React, { memo } from "react";

const CustomInput = (props) => {
  const {
    id,
    className,
    placeholder,
    style,
    type,
    onChange,
    value,
    defaultValue,
    required,
    error,
    onFocus,
    onClick,
    maxLength,
    // pattern,
    onInput,
    onKeyDown,
  } = props;
  return (
    <>
      <input
        type={type || "text"}
        id={id}
        className={className || ""}
        style={style}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onClick={onClick}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength || ""}
        // pattern={pattern || ""}
        onInput={onInput || null}
        onKeyDown={onKeyDown || null}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export default memo(CustomInput);
