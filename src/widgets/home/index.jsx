import React from "react";
import backgroundHome from "../../assets/images/home/background_home.svg";
import HeaderHome from "../../components/HomeComponents/HeaderHome";
import HomeForm from "../../components/HomeComponents/HomeForm";
import "./home.scss";
import GirlRimac from "../../assets/images/home/girl_rimac.svg";

const HomeWidget = () => {
  return (
    <>
      <HeaderHome />
      <div className="containerHome">
        <div className="containerHome__BoxImage">
          <img src={backgroundHome} alt="" />
        </div>
        <div className="containerHome__responsive">
          <span className="containerHome__responsive__subtitle">¡NUEVO!</span>
          <h1 className="containerHome__responsive__title">
            Seguro Vehicular <span>Tracking</span>
          </h1>
          <span className="containerHome__responsive__description">
            Cuentanos donde le haras seguimiento a tu seguro
          </span>
          <img
            className="containerHome__responsive__image"
            src={GirlRimac}
            alt="chica rimac"
          />
        </div>
        <div className="containerHome__BoxForm">
          <HomeForm />
        </div>
      </div>
    </>
  );
};

export default HomeWidget;
