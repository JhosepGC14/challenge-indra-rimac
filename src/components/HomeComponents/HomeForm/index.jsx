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

const HomeForm = () => {
  //validations
  const { validated } = useValidate();
  const [formStateHome, setFormStateHome] = useState(FormHome);
  const [errors, setErrors] = useState(FormHome);
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
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFormHome = validated(formStateHome, FormHomeValidation);
    setErrors(errorFormHome);
    if (!Object.keys(errorFormHome).length > 0) {
      console.log(formStateHome);
    }
  };

  return (
    <div className="boxForm">
      <form onSubmit={handleSubmit}>
        <h2>Déjanos tus datos</h2>
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
        <InputText
          placeholder="Celular"
          type="number"
          name="cellphone"
          onChange={handleChange}
          value={formStateHome.cellphone}
          errors={errors}
        />
        <InputText
          placeholder="Placa"
          type="text"
          name="licensePlate"
          onChange={handleChange}
          value={formStateHome.licensePlate}
          errors={errors}
        />
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
