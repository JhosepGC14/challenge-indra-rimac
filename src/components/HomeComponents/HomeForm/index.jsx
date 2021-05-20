import React, { useState } from "react";
import { Form } from "react-bootstrap";
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

const HomeForm = () => {
  //validations
  const { validated } = useValidate();
  const [formStateHome, setFormStateHome] = useState(FormHome);
  const [errors, setErrors] = useState(FormHome);
  //eslint-disable-next-line
  const [options, setOptions] = useState([
    {
      name: "DNI",
    },
    {
      name: "RUC",
    },
  ]);

  const router = useHistory();

  const handleChange = ({ name, value }) => {
    setFormStateHome({
      ...formStateHome,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se ejecuto form");
    const errorFormHome = validated(formStateHome, FormHomeValidation);
    console.log(errorFormHome);
    setErrors(errorFormHome);
    if (!Object.keys(errorFormHome).length > 0) {
      console.log(formStateHome);
      router.push("/detalle-vehicular");
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
    </div>
  );
};

export default HomeForm;
