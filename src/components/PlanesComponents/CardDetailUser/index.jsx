import React from "react";
import { Link } from "react-router-dom";
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
      <Link
        to={`/detalle-vehicular/${dataUser.id}`}
        className="boxDetailUser__edit"
        href="#!"
      >
        Editar
      </Link>
      <img src={BoyRimac} alt="boy rimac" className="boxDetailUser__img" />
    </div>
  );
};

export default CardDetailUser;
