import axios from "axios";
import RimacError from "../../utils/errors/Rimac";

// const URL =  "https://my-json-server.typicode.com/JhosepGC14/challenge-indra-rimac";
const URL = "http://localhost:4000";

const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function callApiAxios(config, token) {
  try {
    // Validar si existe token
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    let response = await api(config);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response);
    }
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  if (error && error.name === "RimacError") {
    // the request went through and a response was returned
    // status code in 3xx / 4xx / 5xx range
    throw new RimacError(
      error.status,
      error.type,
      error.id,
      error.message,
      error.messageUser
    );
  } else if (error.request) {
    // request was made but server returned no response
    throw new RimacError(
      500,
      0,
      1,
      "No existe respuesta en el servidor",
      "Ocurrió un error inesperado. Por favor, intenta de nuevo"
    );
  } else {
    // something went wrong in setting up the request
    throw new RimacError(
      400,
      0,
      1,
      error.message,
      "Ocurrió un error inesperado. Por favor, intenta de nuevo"
    );
  }
}

export function getQuery(filters) {
  let query = "";
  if (filters) {
    let esc = encodeURIComponent;
    query = Object.keys(filters)
      .map((k) => esc(k) + "=" + esc(filters[k] == null ? "" : filters[k]))
      .join("&");
  }

  return query;
}
