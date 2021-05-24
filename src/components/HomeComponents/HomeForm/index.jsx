import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import "./HomeForm.scss";

import {
  FormHome,
  FormHomeValidation,
} from "../../../widgets/home/store/state";
import ButtonDropdown from "../../shared/Buttons/ButtonsDropdown";
import InputText from "../../shared/Inputs/InputText";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import useValidate from "../../../utils/validations";
import { useHistory } from "react-router-dom";
import RimacApi from "../../../infrastructure/services/RimacServices";

const HomeForm = () => {
  const router = useHistory();
  //validations
  const { validated } = useValidate();
  const [formStateHome, setFormStateHome] = useState(FormHome);
  const [errors, setErrors] = useState(FormHome);
  const [alertForm, setAlertForm] = useState({
    show: false,
    text: "",
  });
  //eslint-disable-next-line
  const [options, setOptions] = useState([
    {
      name: "DNI",
    },
    {
      name: "RUC",
    },
  ]);

  const handleChange = ({ name, value }) => {
    setFormStateHome({
      ...formStateHome,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFormHome = validated(formStateHome, FormHomeValidation);
    setErrors(errorFormHome);
    if (!Object.keys(errorFormHome).length > 0) {
      getDataUser(formStateHome);
    }
  };

  const getDataUser = async (filter) => {
    try {
      let response = await RimacApi.getDataUser(filter);
      if (response?.length !== 0) {
        router.push(`/detalle-vehicular/${response[0].id}`);
      } else {
        //TODO que hacer cuando no está registrado?
        setAlertForm({
          show: true,
          text: "No se ha encontrado usuario con la información brindada. Intentar nuevamente.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="boxForm">
      <form onSubmit={handleSubmit}>
        <h2 className="boxForm__title">Déjanos tus datos</h2>
        <div className="boxForm__dropdown">
          <ButtonDropdown
            variant="outline"
            title="DNI"
            name="dni"
            onChange={handleChange}
            value={formStateHome.dni}
            options={options}
            errors={errors}
            placeholder="Nro. de doc"
          />
        </div>
        <InputText
          placeholder="Celular"
          type="number"
          name="cellphone"
          onChange={handleChange}
          value={formStateHome.cellphone}
          errors={errors}
        />
        <div className="boxForm__inputs">
          <InputText
            placeholder="Placa"
            type="text"
            name="licensePlate"
            onChange={handleChange}
            value={formStateHome.licensePlate}
            errors={errors}
          />
        </div>
        <div className="boxForm__checkbox_container">
          <Form.Check
            type="checkbox"
            className="checkbox_custom"
            id="customControlInline"
            custom
          />
          <span className="boxForm__terms">
            Acepto la <u>Política de Protecciòn de Datos Personales</u> y{" "}
            <u>los Términos y Condiciones.</u>
          </span>
        </div>
        <ButtonPrimary variant="secondary" content="COTÍZALO" type="submit" />
      </form>
      {alertForm.show && (
        <Alert className="mt-4 text-center" variant="danger">
          {alertForm.text}
        </Alert>
      )}
    </div>
  );
};

export default HomeForm;
