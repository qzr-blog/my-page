import base from '../base'
import axios from '../../common/js/axios'

const basic: object = {
  getInfo() {
    return axios.get(`${base.basic.getInfo}`)
  },
  getOverview() {
    return axios.get(`${base.basic.getOverview}`)
  }
}

export default basic
