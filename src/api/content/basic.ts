import base from '../base'
import axios from '../../common/js/axios'

const basic: object = {
  getInfo() {
    return axios.post(`${base.basic.getInfo}`)
  }
}

export default basic
