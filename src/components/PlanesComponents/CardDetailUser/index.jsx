import React from "react";
import "./CardDetailUser.scss";
import BoyRimac from "../../../assets/images/planes/boy_rimac.svg";

const CardDetailUser = ({ dataUser }) => {
  return (
    <div className="boxDetailUser">
      <span className="boxDetailUser__placa">
        Placa: {dataUser.licensePlate || ""}
      </span>
      <span className="boxDetailUser__brand">
        {dataUser.brand} {dataUser.year}
      </span>
      <a className="boxDetailUser__edit" href="#!">
        Editar
      </a>
      <img src={BoyRimac} alt="boy rimac" className="boxDetailUser__img" />
    </div>
  );
};

export default CardDetailUser;
