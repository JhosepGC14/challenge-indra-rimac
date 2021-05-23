import React, { useEffect, useState } from "react";
import "./DetallesForm.scss";
import ButtonRadio from "../../shared/Buttons/ButtonRadio";
import ButtonPrimary from "../../shared/Buttons/ButtonPrimary";
import InputSelect from "../../shared/Inputs/InputSelect";
import IconCar from "../../../assets/images/detalles/icon_car.svg";
import Counter from "../Counter";
import useValidate from "../../../utils/validations";
import {
  detallesForm,
  detallesFormValidation,
} from "../../../widgets/detalles/store/state";
import { useHistory, useParams } from "react-router";
import ButtonBack from "../../shared/Buttons/ButtonBack";
import RimacApi from "../../../infrastructure/services/RimacServices";
import ComboServices from "../../../infrastructure/services/ComboServices";

const DetallesForm = () => {
  //validations
  const { validated } = useValidate();
  const router = useHistory();
  const params = useParams();

  const [formDetailCar, setFormDetailCar] = useState(detallesForm);
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState(formDetailCar);

  // eslint-disable-next-line
  const [typeAuto, setTypeAuto] = useState([
    {
      text: "Si",
      value: "1",
    },
    {
      text: "No",
      value: "0",
    },
  ]);
  // eslint-disable-next-line
  const [brand, setBrand] = useState([]);
  // eslint-disable-next-line
  const [year, setYear] = useState([
    {
      text: "2019",
      value: "2019",
    },
    {
      text: "2020",
      value: "2020",
    },
  ]);

  const handleChange = ({ name, value }) => {
    setFormDetailCar({
      ...formDetailCar,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorDetallesForm = validated(formDetailCar, detallesFormValidation);
    setErrors(errorDetallesForm);
    if (!Object.keys(errorDetallesForm).length > 0) {
      updateDataUserById(params?.id);
    }
  };

  const updateDataUserById = async (id) => {
    try {
      await RimacApi.updateDataById(id, formDetailCar);
      router.push(`/planes-cobertura/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getUserById(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    getAllBrands();
  }, []);

  const getAllBrands = async () => {
    try {
      let allBrands = await ComboServices.getAllBrands();
      let mutableList = await allBrands.map((item) => {
        return {
          value: item.id,
          text: item.brand,
        };
      });
      setBrand(mutableList);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async (id) => {
    try {
      let response = await RimacApi.getDataUserById(id);
      if (response) {
        setFormDetailCar({
          year: response.year || "",
          brand: response.brand || "",
          typeCar: response.typeCar || "",
          amount: response.amount || 12500,
        });
        setUserName(response.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerGeneralForm">
      <form onSubmit={handleSubmit}>
        <ButtonBack
          onClick={() => {
            router.push("/");
          }}
        />
        <h2 className="containerGeneralForm__titleForm">
          ¡Hola, <span>{userName}!</span>
        </h2>
        <span className="containerGeneralForm__subtitleForm">
          Completa los datos de tu auto
        </span>
        <div className="containerGeneralForm__boxDetallesForm">
          <div className="containerDetallesForm__boxInputs">
            <div className="itemInput">
              <InputSelect
                label="Año"
                name="year"
                value={formDetailCar.year}
                onChange={handleChange}
                options={year}
                errors={errors}
              />
            </div>
            <div className="itemInput">
              <InputSelect
                label="Marca"
                name="brand"
                value={formDetailCar.brand}
                onChange={handleChange}
                options={brand}
                errors={errors}
              />
            </div>
            <div className="inputRadio">
              <span>¿Tu auto es a gas?</span>
              <ButtonRadio
                options={typeAuto}
                name="typeCar"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          </div>
          <div className="containerHelp">
            <span className="containerHelp__title">AYUDA</span>
            <hr className="containerHelp__divider" />
            <div className="containerHelp__boxInfo">
              <span className="containerHelp__question">
                ¿No encuentras el modelo ?
              </span>
              <img
                className="containerHelp__image"
                src={IconCar}
                alt="icon car"
              />
              <a className="containerHelp__link" href="!#">
                CLIC AQUÍ
              </a>
            </div>
          </div>
        </div>
        <div className="formDivider">
          <hr className="containerHelp__divider" />
        </div>
        <div className="containerCounter">
          <div className="containerCounter__monto">
            <span className="containetCounter__title">
              Indica la suma asegurada
            </span>
            <div>
              <span className="containerCounter__amountMin">MIN $12,500</span>
              <span className="containerCounter__amountMax">MAX $16,500</span>
            </div>
          </div>
          <div className="containerCounter__input">
            <Counter
              name="amount"
              value={formDetailCar.amount}
              onChange={handleChange}
            />
          </div>
        </div>
        <ButtonPrimary
          variant="secondary"
          content="CONTINUAR "
          type="submit"
          icon
        />
      </form>
    </div>
  );
};

export default DetallesForm;
