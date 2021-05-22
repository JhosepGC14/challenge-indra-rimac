import React from "react";
import { Form } from "react-bootstrap";
import "./ButtonRadio.scss";

const ButtonRadio = ({ options = [], name, onChange, errors }) => {
  const handleChange = ({ target }) => {
    onChange(target);
  };

  return (
    <div>
      <div key={"inline-radio"}>
        {options.map((item, index) => {
          return (
            <Form.Check
              // isInvalid={errors[name] ? true : false}
              key={index}
              inline
              label={item.text}
              name={name}
              value={item.value}
              onChange={handleChange}
              type="radio"
              id={`inline-radio-1`}
            />
          );
        })}
        {errors[name] && <p className="text-danger small">{errors[name]}</p>}
      </div>
    </div>
  );
};

export default ButtonRadio;
