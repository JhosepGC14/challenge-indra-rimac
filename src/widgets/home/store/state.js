export const FormHome = {
  dni: "",
  typeDocument: "",
  cellphone: "",
  licensePlate: "",
};

export const FormHomeValidation = {
  dni: {
    required: true,
    type: "number",
    positive: true,
  },

  typeDocument: {
    type: "comboBox",
  },
  cellphone: {
    required: true,
    type: "number",
    positive: true,
  },
  licensePlate: {
    required: true,
    type: "string",
  },
};
