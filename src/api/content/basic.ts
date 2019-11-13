import base from "../base";
import axios from "../../common/js/axios";

const info = base.basic.info,
  overview = base.basic.overview;

const basic: object = {
  getInfo() {
    return axios.get(`${info}`);
  },
  getOverview() {
    return axios.get(`${overview}`);
  },
  saveInfo() {
    return axios.put(`${info}`);
  },
  createInfo(data: Object) {
    return axios.post(`${info}`, data);
  }
};

export default basic;
