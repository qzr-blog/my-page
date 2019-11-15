import base from "../base";
import axios from "@/common/js/axios";

const overview = base.overview;

const basic: object = {
  getOverview() {
    return axios.get(`${overview}`);
  }
};

export default basic;
