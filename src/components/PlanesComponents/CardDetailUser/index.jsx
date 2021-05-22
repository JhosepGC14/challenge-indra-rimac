import React from "react";
import "./CardDetailUser.scss";
import BoyRimac from "../../../assets/images/planes/boy_rimac.svg";

const CardDetailUser = () => {
  return (
    <div className="boxDetailUser">
      <span className="boxDetailUser__placa">Placa: C2U-114</span>
      <span className="boxDetailUser__brand">Wolkswagen 2019 Golf</span>
      <a className="boxDetailUser__edit" href="#!">
        Editar
      </a>
      <img src={BoyRimac} alt="boy rimac" className="boxDetailUser__img" />
    </div>
  );
};

export default CardDetailUser;
