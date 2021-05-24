import React from "react";

const InputSelect = ({
  label,
  options = [],
  name,
  value,
  onChange,
  errors,
}) => {
  const handleChange = ({ target }) => {
    onChange(target);
  };

  return (
    <>
      <div className="form-floating">
        <select
          className={errors[name] ? "form-select is-invalid" : "form-select"}
          id="floatingSelect"
          name={name}
          value={value}
          onChange={handleChange}
        >
          <option value="">Seleccione una opción</option>
          {options.map((item, index) => {
            return (
              <option key={index} id={item.text} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
        <label htmlFor="floatingSelect">{label}</label>
      </div>
      {errors[name] && (
        <p className="text-danger small">{errors[name] && `${errors[name]}`}</p>
      )}
    </>
  );
};

export default InputSelect;
