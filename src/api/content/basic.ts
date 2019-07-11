import base from '../base'
import axios from '../../common/js/axios'

const basic: object = {
  getInfo() {
    return axios.get(`${base.basic.getInfo}`)
  },
  getOverview() {
    return axios.get(`${base.basic.getOverview}`)
  },
  saveInfo() {
    return axios.post(`${base.basic.saveInfo}`)
  }
}

export default basic
