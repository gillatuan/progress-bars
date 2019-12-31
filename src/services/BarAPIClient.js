import axios from "axios"

import { APP_API_URL_BARS, APP_API_URL_BARS_ERROR } from "../constants/api"

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
const getBarsApiError = () => {
  return axios
    .get(APP_API_URL_BARS_ERROR)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return "Network Error"
    })
}

const BarAPIClient = {
  getBarsApi,
  getBarsApiError
}

export default BarAPIClient
