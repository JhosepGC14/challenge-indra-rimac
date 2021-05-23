import { callApiAxios } from "../api/RimacApi";
import * as ConstantApi from "../api/Constants";

const ComboServices = {
  //get data brand by id
  async getAllBrands() {
    let config = {
      method: ConstantApi.GET,
      url: "/brands",
    };
    let response = await callApiAxios(config);
    return response;
  },
  //get data brand by id
  async getListBrandsById(id) {
    let config = {
      method: ConstantApi.GET,
      url: "/brands/" + id,
    };
    let response = await callApiAxios(config);
    return response;
  },
};

export default ComboServices;
