import React from "react";
import DetallesForm from "../../components/DetallesComponents/DetallesForm";
import Layout from "../../components/shared/Layout";
import Stepper from "../../components/shared/Stepper";
import "./detalles.scss";

const DetallesWidget = () => {
  return (
    <Layout>
      <div className="containerGeneral">
        <div className="containerGeneral__stepper">
          <Stepper step="1" />
        </div>
        <div className="containerGeneral__Form">
          <DetallesForm />
        </div>
      </div>
    </Layout>
  );
};

export default DetallesWidget;
