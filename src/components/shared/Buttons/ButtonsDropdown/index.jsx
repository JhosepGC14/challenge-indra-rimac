import React from "react";
import {
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./ButtonDropdown.scss";

const ButtonDropdown = ({
  variant,
  title,
  name,
  onChange,
  value,
  options = [],
  type = "text",
  placeholder,
  errors,
}) => {
  const handleChange = ({ target }) => {
    onChange(target);
  };

  return (
    <>
      <InputGroup className="dropdown_custom_group">
        <DropdownButton
          as={InputGroup.Prepend}
          variant={variant}
          title={title}
          id="input-group-dropdown-1"
          className="dropdown_custom"
        >
          {options.map((item, i) => {
            return (
              <Dropdown.Item key={i} href="#">
                {item.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <FormControl
          value={value}
          onChange={handleChange}
          name={name}
          size="lg"
          type={type}
          isInvalid={errors[name] ? true : false}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">
          {errors[name] && `${errors[name]}`}
        </Form.Control.Feedback>
      </InputGroup>
    </>
  );
};

export default ButtonDropdown;
