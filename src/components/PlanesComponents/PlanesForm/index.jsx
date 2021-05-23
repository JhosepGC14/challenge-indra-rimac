import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
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
  const router = useHistory();

  const [dataUser, setdataUser] = useState({});
  const [initialAmount, setInitialAmount] = useState(20);
  const [PlanForm, setPlanForm] = useState([]);
  // eslint-disable-next-line
  const [PlanesAvaliable, setPlanesAvaliable] = useState([
    {
      id: 1,
      nameItem: "Llanta de respuesto",
    },
    {
      id: 2,
      nameItem: "Analisis de motor",
    },
    {
      id: 3,
      nameItem: "Aros gratis",
    },
  ]);

  const handleAddPlan = (amount) => {
    console.log(amount);
    setInitialAmount(initialAmount + amount);
  };

  const handleRemovePlan = (amount) => {
    setInitialAmount(initialAmount - amount);
  };

  const addItemToPlanList = (plan) => {
    let [newList] = PlanesAvaliable.filter((item) => item.id === plan);
    setPlanForm([...PlanForm, newList]);
  };

  const removeItemToPlanList = (plan) => {
    let newList = PlanForm.filter((item) => item.id !== plan);
    setPlanForm(newList);
  };

  useEffect(() => {
    if (params.id) {
      getUserById(params.id);
    }
  }, [params.id]);

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

  const handleSendPlansAndAmount = async () => {
    try {
      let body = {
        plans: PlanForm,
        totalMount: initialAmount,
      };
      let response = await RimacApi.updateDataById(params.id, body);
      console.log("fue actualizado correctamente", response);
      if (response) {
        router.push("/despedida");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="containerGeneralPlans">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <ButtonBack
            onClick={() => {
              router.push(`/detalle-vehicular/${params.id}`);
            }}
          />
          <h1 className="containerGeneralPlans__title">Mira las coberturas</h1>
          <span className="containerGeneralPlans__subtitle">
            Conoce las coberturas para tu plan
          </span>
          <div className="containerGeneralPlans__contentUser">
            <CardDetailUser dataUser={dataUser} />
          </div>
          <div className="boxTabs">
            <TabsCoverage
              handleAddPlan={handleAddPlan}
              handleRemovePlan={handleRemovePlan}
              addListItem={addItemToPlanList}
              removeListItem={removeItemToPlanList}
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <TotalPrice
            listItems={PlanForm}
            amount={initialAmount}
            handleSendPlansAndAmount={handleSendPlansAndAmount}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PlanesForm;
