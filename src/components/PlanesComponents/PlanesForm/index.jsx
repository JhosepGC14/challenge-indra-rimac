import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Planes.scss";
import CardDetailUser from "../CardDetailUser";
import TabsCoverage from "../TabsCoverage";
import TotalPrice from "../TotalPrice";
import ButtonBack from "../../shared/Buttons/ButtonBack";

const PlanesForm = () => {
  return (
    <Container className="containerGeneralPlans">
      <Row>
        <Col sm={12} md={6}>
          <ButtonBack />
          <h1 className="containerGeneralPlans__title">Mira las coberturas</h1>
          <span className="containerGeneralPlans__subtitle">
            Conoce las coberturas para tu plan
          </span>
          <div className="containerGeneralPlans__contentUser">
            <CardDetailUser />
          </div>
          <div className="boxTabs">
            <TabsCoverage />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <TotalPrice />
        </Col>
      </Row>
    </Container>
  );
};

export default PlanesForm;
