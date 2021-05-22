import React from "react";
import "./ItemStep.scss";

const ItemStep = ({ step, name, current }) => {
  return (
    <div className="containerStep">
      <span
        className={
          current
            ? "containerStep__numberStep activeNumber"
            : "containerStep__numberStep"
        }
      >
        {step}
      </span>
      <span
        className={
          current
            ? "containerStep__nameStep activeName"
            : "containerStep__nameStep"
        }
      >
        {name}
      </span>
    </div>
  );
};

export default ItemStep;
