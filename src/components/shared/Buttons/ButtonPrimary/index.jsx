import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonPrimary.scss";

const ButtonPrimary = ({ size, variant, onClick, type, content }) => {
  return (
    <>
      <Button
        className="button_primary_custom"
        variant={variant}
        size={size}
        onClick={onClick}
        type={type}
      >
        {content}
      </Button>
    </>
  );
};

export default ButtonPrimary;
