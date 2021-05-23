import React from "react";
import { useHistory } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import "./despedida.scss";
import Layout from "../../components/shared/Layout";
import BannerImg from "../../assets/images/despedida/banner_rimac_welcome.svg";
import ButtonPrimary from "../../components/shared/Buttons/ButtonPrimary";

const DespedidaWidget = () => {
  const router = useHistory();

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col sm={12} md={4}>
            <div className="boxBackground">
              <img className="boxBackground__img" src={BannerImg} alt="" />
            </div>
          </Col>
          <Col sm={12} md={8}>
            <div className="containerWelcome">
              <h1 className="containerWelcome__title">
                <span>¡Te damos la bienvenida!</span>
                Cuenta con nosotros para proteger tu vehículo
              </h1>
              <p className="containerWelcome__description">
                Enviaremos la confirmación de compra de tu Plan Vehícular
                Tracking a tu correo:
                <br />
                <span>jhosepgc14@gmail.com</span>
              </p>
              <div className="containerWelcome__boxBtn">
                <ButtonPrimary
                  variant="secondary"
                  content="CÓMO USAR MI SEGURO"
                  type="button"
                  onClick={() => router.push("/")}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DespedidaWidget;
