import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import "./Planes.scss";
import CardDetailUser from "../CardDetailUser";
import TabsCoverage from "../TabsCoverage";
import TotalPrice from "../TotalPrice";
import ButtonBack from "../../shared/Buttons/ButtonBack";
import RimacApi from "../../../infrastructure/services/RimacServices";
import ComboServices from "../../../infrastructure/services/ComboServices";

const PlanesForm = () => {
  const params = useParams();
  const [dataUser, setdataUser] = useState({});

  useEffect(() => {
    if (params.id) {
      getUserById(params.id);
    }
  }, []);

  const getUserById = async (id) => {
    try {
      let data = {};
      let response = await RimacApi.getDataUserById(id);
      let brand = await ComboServices.getListBrandsById(response.brand);
      if (brand && response) {
        data = {
          ...response,
          brand: brand.brand,
        };
        setdataUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <CardDetailUser dataUser={dataUser} />
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
