import React from "react";
import Layout from "../../components/shared/Layout";
import Stepper from "../../components/shared/Stepper";
import "./planes.scss";

const PlanesWidget = () => {
  return (
    <Layout>
      <div className="containerGeneralPlanes">
        <div className="containerGeneralPlanes__stepper">
          <Stepper step="2" />
        </div>
        <div className="containerGeneralPlanes__form"></div>
      </div>
    </Layout>
  );
};

export default PlanesWidget;
