import handler from "../../../pages/api/calculate/[...params]"

const getRequestObject = (method, params) => {
  return {
    method: method,
    query: { params },
  }
}

const getResponseObject = () => {
  return {
    _status: null,
    _json: null,
    status: function (statusCode) {
      this._status = statusCode
      return this
    },
    json: function (object) {
      this._json = object
      return this
    },
  }
}

describe("Wrong number of params", () => {
  it("throws an error if user submits more than 3 params", () => {
    const req = getRequestObject("GET", ["add", 2, 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Query params should have 3 items. Received 4: add,2,2,2`,
    })
  })
})

//
describe("Calculate API tests", () => {
  it("returns a valid result when getting valid params", () => {
    const req = getRequestObject("GET", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 4 })
  })
})

//
describe("Unsupported methods:", () => {
  it("throws an error if user sends a POST request", () => {
    const req = getRequestObject("POST", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported method POST. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a PUT request", () => {
    const req = getRequestObject("PUT", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported method PUT. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a PATCH request", () => {
    const req = getRequestObject("PATCH", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported method PATCH. Only GET method is supported`,
    })
  })
  it("throws an error if user sends a DELETE request", () => {
    const req = getRequestObject("DELETE", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported method DELETE. Only GET method is supported`,
    })
  })
})
