import React from "react";
import IconShield from "../../../assets/images/planes/icon_shield.svg";
import IconCheck from "../../../assets/images/planes/icon_check.svg";
import "./TotalPrice.scss";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";

const TotalPrice = ({ listItems, amount, handleSendPlansAndAmount }) => {
  console.log(listItems);
  return (
    <div className="containerGeneralPrice">
      <div className="containerPrice">
        <div className="containerPrice__amount">
          <span className="containerPrice__price">${amount}.00</span>
          <span className="containerPrice__month">mensuales</span>
        </div>
        <div className="containerPrice__img">
          <img src={IconShield} alt="" />
        </div>
      </div>
      <hr className="containerGeneralPrice__divider" />
      <div className="contentListInclude">
        <span className="contentListInclude__title">El precio incluye:</span>
        <ul>
          {listItems &&
            listItems.map((item, index) => {
              return (
                <li key={index}>
                  <img src={IconCheck} alt="icon" />
                  <span>{item.nameItem}</span>
                </li>
              );
            })}
        </ul>
        <ButtonPrimary
          variant="secondary"
          content="LO QUIERO"
          type="button"
          size="sm"
          onClick={handleSendPlansAndAmount}
        />
      </div>
    </div>
  );
};

export default TotalPrice;
