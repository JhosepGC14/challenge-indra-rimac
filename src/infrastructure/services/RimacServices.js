import { callApiAxios, getQuery } from "../api/RimacApi";
import * as ConstantApi from "../api/Constants";

const RimacApi = {
  //get data user by a filter
  async getDataUser(filter) {
    let query = getQuery(filter);
    let config = {
      method: ConstantApi.GET,
      url: "/results?" + query,
    };
    let response = await callApiAxios(config);
    return response;
  },

  //create data user when it doesnt exist
  async createDataUser(data) {
    let config = {
      method: ConstantApi.POST,
      url: "/results/",
      data: JSON.stringify(data),
    };
    let response = await callApiAxios(config);
    return response;
  },

  //get data user by id
  async getDataUserById(id) {
    let config = {
      method: ConstantApi.GET,
      url: "/results/" + id,
    };
    let response = await callApiAxios(config);
    return response;
  },

  //update values by id
  async updateDataById(id, data) {
    let config = {
      method: ConstantApi.PATCH,
      url: "/results/" + id,
      data: JSON.stringify(data),
    };

    let response = await callApiAxios(config);
    return response;
  },
};

export default RimacApi;
