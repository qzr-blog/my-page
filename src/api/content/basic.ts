import base from "../base";
import axios from "@/common/js/axios";

const overview = base.overview;
const archives = base.archives;

const basic: object = {
  getOverview() {
    return axios.get(`${overview}`);
  },
  getArchives() {
    return axios.get(archives)
  }
};

export default basic;

