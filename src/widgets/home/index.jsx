import React from "react";
import backgroundHome from "../../assets/images/home/background_home.svg";
import HomeForm from "../../components/HomeComponents/HomeForm";
import "./home.scss";

const HomeWidget = () => {
  return (
    <>
      <div className="containerHome">
        <div className="containerHome__BoxImage">
          <img src={backgroundHome} alt="" />
        </div>
        <div className="containerHome__BoxForm">
          <HomeForm />
        </div>
      </div>
    </>
  );
};

export default HomeWidget;
