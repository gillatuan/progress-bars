import axios from "axios"

import { APP_API_URL_BARS } from '../constants/api'

const getBarsApi = () => {
  return axios
    .get(APP_API_URL_BARS)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err
    })
}

const BarAPIClient = {
  getBarsApi
}

export default BarAPIClient