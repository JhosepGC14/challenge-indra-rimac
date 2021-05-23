const validationEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0).{1}d{1,6}");

const useValidate = () => {
  const validated = (form, validations) => {
    const error = {};
    for (var key in form) {
      if (validations.hasOwnProperty(key)) {
        switch (validations[key].type) {
          case "string":
            error[key] = validateString(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "email":
            error[key] = validateEmail(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "comboBox":
            error[key] = validateCombo(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "ruc":
            error[key] = validateRuc(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "coordinates":
            error[key] = validateLongitudOrLatitud(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "number":
            error[key] = validateNumber(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "decimal":
            error[key] = validateDecimales(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          case "file":
            error[key] = validateImage(form[key], validations[key]);
            if (!error[key]) delete error[key];
            break;
          default:
            return error;
        }
      }
    }
    return error;
  };
  //Validaciones de string
  const validateString = (value, validation) => {
    if (validation.required) {
      if (value.toString().trim() === "") return `El campo es requerido.`;
    }

    if (/[<>#@$%&]/.test(value)) return "Caracteres inválidos.";
  };

  //Validaciones de email
  const validateEmail = (value, validation) => {
    if (validation.required) {
      if (value.trim() === "") return `El campo es requerido.`;
    }

    if (!validationEmail.test(value)) {
      return "Ingrese caracteres validos de email.";
    }
  };

  //validation comboBox's
  const validateCombo = (value, validation) => {
    if (validation.required) {
      if (value === "") {
        return `El campo es requerido.`;
      }
    }
  };

  //Validaciones de campos para ruc
  const validateRuc = (value, validation) => {
    if (validation.required) {
      if (value.toString().trim() === "") return `El campo es requerido`;
    }
    if (validation.positive) {
      if (/[^0-9]/.test(value)) return "Solo se acepta números positivos.";
    }

    if (value.length < 10) {
      return "El nro RUC debe ser mayor o igual a 10 dígitos.";
    }
  };

  //Validaciones de numeros
  const validateNumber = (value, validation) => {
    if (validation.required) {
      if (value.toString().trim() === "") {
        return `El campo es requerido`;
      }
    }
    if (validation.positive) {
      if (/[^0-9]/.test(value)) {
        return "Solo se acepta números positivos.";
      }
    }

    if (validation.max) {
      if (value > validation.max) {
        return `No se permite valores mayores a ${validation.max}.`;
      }
    }

    if (/[^0-9 -]/.test(value)) {
      return "Caracteres inválidos.";
    }
  };

  //Validaciones de decimal
  const validateDecimales = (value, validation) => {
    if (validation.required) {
      if (value.toString().trim() === "") {
        return `El campo es requerido`;
      }
    }

    if (validation.decimalfixed) {
      let maxDecimal = validation.decimalfixed + 1;
      let cadena = "[.][0-9]{" + maxDecimal + ",}";
      let limit = new RegExp(cadena);

      if (limit.test(value)) {
        return "Máximo " + validation.decimalfixed + " decimales.";
      }
    }

    if (/[^0-9 .]/.test(value)) {
      return "Caracteres inválidos.";
    }

    if (/[.][0-9]{0}$/.test(value)) {
      return "Ingrese un decimal correcto.";
    }
  };

  //validacion para longitud y Latitud
  const validateLongitudOrLatitud = (value, validation) => {
    if (validation.required) {
      if (value.toString().trim() === "") {
        return "Campos requeridos.";
      }
    }
    if (reg.test(value)) {
      return "Ingresa una coordenada valida.";
    }
  };

  //Validaciones de Imagenes
  const validateImage = (value, validation) => {
    if (validation.required) {
      if (!value.file) {
        return "La imagen es requerida.";
      }
    }
    if (value.file !== null) {
      if (value.file.size > 500000) {
        return "La imagen es muy pesada.";
      }
    }
  };
  return { validated };
};

export default useValidate;
