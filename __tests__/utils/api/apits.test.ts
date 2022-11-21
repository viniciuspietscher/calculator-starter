import { createMocks, Query, RequestMethod } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from "../../../pages/api/calculate/[...params]"

describe("Wrong number of params", () => {
  function mockRequestResponse(method: RequestMethod, query: Query) {
    const {req, res}: {req: NextApiRequest, res: NextApiResponse} = createMocks({method, query})
    return {req, res}
  }
  it("throws an error if user submits more than 3 params", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["add", 2, 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params?.length}: ${req.query.params}`,
    })
  })

  it("throws an error if user submits less than 3 params", () => {
    const { req, res } = mockRequestResponse("GET", {params: [2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params?.length}: ${req.query.params}`,
    })
  })
})

describe("Calculate API tests", () => {
  function mockRequestResponse(method: RequestMethod, query: Query) {
    const {req, res}: {req: NextApiRequest, res: NextApiResponse} = createMocks({method, query})
    return {req, res}
  }

  it("returns a valid result when Adding integers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["add",3,5]})
    handler(req, res)
    
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 8 })
  })

  it("returns a valid result when Adding float numbers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["add", 2.2, 2.2]})

    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 4.4 })
  })

  it("returns a valid result when Subtracting integers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["subtract", 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 0 })
  })

  it("returns a valid result when Subtracting float numbers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["subtract", 2.2, 2.2]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 0 })
  })

  it("returns a valid result when Multiplying integers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["multiply", 2, 3]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 6 })
  })

  it("returns a valid result when Multiplying float numbers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["multiply", 3.5, 2.9]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 3.5 * 2.9 })
  })
  

  it("returns a valid result when Dividing integers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["divide", 10, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 5 })
  })

  it("returns a valid result when Dividing float numbers", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["divide", 20.2, 1.5]})
    handler(req, res)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ result: 20.2 / 1.5 })
  })

  it("throws an error when Dividing by zero", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["divide",  20, 0]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({ message: "Can't divide by zero" })
  })

})

describe("Unsupported params", () => {
  function mockRequestResponse(method: RequestMethod, query: Query) {
    const {req, res}: {req: NextApiRequest, res: NextApiResponse} = createMocks({method, query})
    return {req, res}
  }
  it("throws an error if user submits a String instead of a number", () => {
    const { req, res } = mockRequestResponse("GET", {params: ["add", "a", 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Failed to process query params. Received: ${req.query.params}`,
    })
  })
})

describe("Unsupported methods:", () => {
  function mockRequestResponse(method: RequestMethod, query: Query) {
    const {req, res}: {req: NextApiRequest, res: NextApiResponse} = createMocks({method, query})
  return {req, res}
  }
  it("throws an error if user sends a POST request", () => {
    const { req, res } = mockRequestResponse("POST", {params: ["add", 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Unsupported method POST. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a PUT request", () => {
    const { req, res } = mockRequestResponse("PUT", {params: ["add", 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Unsupported method PUT. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a PATCH request", () => {
    const { req, res } = mockRequestResponse("PATCH", {params: ["add", 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Unsupported method PATCH. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a DELETE request", () => {
    const { req, res } = mockRequestResponse("DELETE", {params: ["add", 2, 2]})
    handler(req, res)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toEqual({
      message: `Unsupported method DELETE. Only GET method is supported`,
    })
  })
})
