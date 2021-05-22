import React from "react";
import ItemStep from "./ItemStep";
import Step from "../../../assets/images/detalles/line_progress.svg";
import "./Stepper.scss";

const Stepper = ({ step }) => {
  return (
    <div className="containerStepGeneral">
      <ItemStep
        step="1"
        name="Datos del auto"
        current={step === "1" ? true : false}
      />
      <img className="imgStep" src={Step} alt="icon_step" />
      <ItemStep
        step="2"
        name="Arma tu plan"
        current={step === "2" ? true : false}
      />
    </div>
  );
};

export default Stepper;
