import base from "../base";
import axios from "@/common/js/axios";

const overview = base.overview;

const basic: object = {
  getOverview() {
    return axios.get(`${overview}`);
  },
  login(data: login) {
    return axios.post(base.login, data)
  }
};

export default basic;

interface login {
  name: string,
  password: string
}
