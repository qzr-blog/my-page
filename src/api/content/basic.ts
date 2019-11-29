import base from "../base";
import axios from "@/common/js/axios";

const overview = base.overview;

const basic: object = {
  getOverview() {
    return axios.get(`${overview}`);
  },
  login(data: login) {
    return axios.post(base.login, data)
  },
  getUserInfo(data: getInfo) {
    return axios.post(base.getUserInfo, data)
  },
  getAllUser() {
    return axios.get(base.getAllUser)
  }
};

export default basic;

interface login {
  name: string,
  password: string
}

interface getInfo {
  token: string
}
