/**
 * Reference
 * https://airbnb.io/enzyme/
 * https://www.robinwieruch.de/axios-jest
 */
import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"

import ProgressBar from "./ProgressBar"
import BarAPIClient from "../services/BarAPIClient"

describe("<ProgressBar />", () => {
  it("renders <ProgressBar /> components", () => {
    const wrapper = mount(<ProgressBar />)
    expect(wrapper.contains("Progress Bars Demo")).to.equal(true)
  })

  // fetch api successfully
  it("fetches successfully data from an API", async () => {
    jest.mock("axios")
    const data = await BarAPIClient.getBarsApi()

    expect(data).to.be.an("object")
  })

  // fetch api erroneously
  it("fetches erroneously data from an API", async () => {
    jest.mock("axios")
    const data = await BarAPIClient.getBarsApiError()
    expect(data).to.be.an("string")
  })
})
