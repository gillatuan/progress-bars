/**
 * Reference
 * https://www.robinwieruch.de/axios-jest
 */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import axios from "axios"
import ProgressBar from "./ProgressBar"
import BarAPIClient from "../services/BarAPIClient"
jest.mock("axios")

describe("<ProgressBar />", () => {
  it("renders <ProgressBar /> components", () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper.contains("Progress Bars Demo")).to.equal(true)
  })

  // fetch api successfully
  it("fetches successfully data from an API", async () => {
    const data = {
      bars: [51, 27, 10, 43],
      buttons: [28, 26, -44, -37],
      limit: 220,
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(BarAPIClient.getBarsApi()).resolves.toEqual(data)
  })

  // fetch api erroneously
  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error"

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    await expect(BarAPIClient.getBarsApi()).rejects.toThrow(errorMessage)
  })
})
