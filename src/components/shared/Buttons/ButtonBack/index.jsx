import React from "react";
import "./ButtonBack.scss";
import IconBack from "../../../../assets/images/detalles/icon_back.svg";

const ButtonBack = ({ onClick }) => {
  return (
    <div className="containerGeneralForm__buttonBack">
      <img src={IconBack} alt="icon back" onClick={onClick || null} />
      <span onClick={onClick || null}>VOLVER</span>
    </div>
  );
};

export default ButtonBack;
