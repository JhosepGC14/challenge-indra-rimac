import React from "react";
import "./Counter.scss";
import IconAdd from "../../../assets/images/detalles/icon_add.svg";
import IconRemove from "../../../assets/images/detalles/icon_remove.svg";

const Counter = ({ name, value, onChange }) => {
  const handleRemoveAmount = () => {
    if (value > 12500) {
      let newValue = value - 100;
      let target = {
        name,
        value: newValue,
      };
      onChange(target);
    }
  };
  const handleAddAmount = () => {
    if (value < 16500) {
      let newValue = value + 100;
      let target = {
        name,
        value: newValue,
      };
      onChange(target);
    }
  };

  return (
    <div className="boxCounter">
      <button
        className="boxCounter__btnRemove"
        type="button"
        onClick={handleRemoveAmount}
      >
        <img src={IconRemove} alt="icon" />
      </button>
      <span className="boxCounter__amount">$ {value}</span>
      <button
        className="boxCounter__btnAdd"
        type="button"
        onClick={handleAddAmount}
      >
        <img src={IconAdd} alt="icon" />
      </button>
    </div>
  );
};

export default Counter;
