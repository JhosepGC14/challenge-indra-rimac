import React from "react";
import "./ButtonBack.scss";
import IconBack from "../../../../assets/images/detalles/icon_back.svg";

const ButtonBack = () => {
  return (
    <div className="containerGeneralForm__buttonBack">
      <img src={IconBack} alt="icon back" />
      <span>VOLVER</span>
    </div>
  );
};

export default ButtonBack;
