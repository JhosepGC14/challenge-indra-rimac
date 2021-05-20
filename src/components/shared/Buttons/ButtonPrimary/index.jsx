import React from "react";
import { Button } from "react-bootstrap";
import IconChevrot from "../../../../assets/images/detalles/icon_chevrot.svg";
import "./ButtonPrimary.scss";

const ButtonPrimary = ({ size, variant, onClick, type, content, icon }) => {
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
        {icon && <img className="icon_buton" src={IconChevrot} alt="icon" />}
      </Button>
    </>
  );
};

export default ButtonPrimary;
