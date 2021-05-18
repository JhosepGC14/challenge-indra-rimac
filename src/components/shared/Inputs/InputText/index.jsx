import React from "react";
import { Form } from "react-bootstrap";
import "./InputText.scss";

const InputText = ({
  errors,
  name,
  value,
  onChange,
  type = "text",
  size = "lg",
  placeholder,
}) => {
  const handleChange = ({ target }) => {
    onChange(target);
  };

  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type={type}
          size={size}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          isInvalid={errors[name] ? true : false}
          className="input_custom"
        />
        <Form.Control.Feedback type="invalid">
          {errors[name] && `${errors[name]}`}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default InputText;
