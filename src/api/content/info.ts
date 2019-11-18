import base from "../base";
import axios from "@/common/js/axios";

const info = base.info

const infoObj: object = {
  getInfo(data: Object) {
    console.log(data)
    return axios.get(`${info}`, {params: data});
  },
  saveInfo() {
    return axios.put(`${info}`);
  },
  createInfo(data: Object) {
    return axios.post(`${info}`, data);
  },
  delete(data: any) {
    return axios.delete(`${info}/${data.id}`)
  }
};

export default infoObj;