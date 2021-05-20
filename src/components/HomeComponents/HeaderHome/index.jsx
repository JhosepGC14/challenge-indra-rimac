import React from "react";
import "./HeaderHome.scss";
import Logo from "../../../assets/images/home/logo_rimac.svg";
import IconPhone from "../../../assets/images/home/icon_phone.svg";

const HeaderHome = ({ principal = false }) => {
  return (
    <header className={principal ? "header" : "header principal"}>
      <div className="header__containerGeneral">
        <div className="header__containerLogo">
          <img
            className="header__containerLogo__logo"
            src={Logo}
            alt="logo rimac seguros"
          />
        </div>
        <div className="header__containerInfo">
          <span className="header__containerInfo__question">
            ¿Tienes alguna duda?
          </span>
          <img
            className="header__containerInfo__icon"
            src={IconPhone}
            alt="icon phone"
          />
          <span className="header__containerInfo__number">(01) 411 6001</span>
          <span className="header__containerInfo__text">Llámanos</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
