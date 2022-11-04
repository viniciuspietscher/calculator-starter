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
      message: `Query params should have 3 items. Received ${req.query.params.length}: ${req.query.params}`,
    })
  })

  it("throws an error if user submits less than 3 params", () => {
    const req = getRequestObject("GET", [2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params.length}: ${req.query.params}`,
    })
  })
})

//
describe("Calculate API tests", () => {
  it("returns a valid result when Adding integers", () => {
    const req = getRequestObject("GET", ["add", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 4 })
  })

  it("returns a valid result when Adding float numbers", () => {
    const req = getRequestObject("GET", ["add", 2.2, 2.2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 4.4 })
  })

  it("returns a valid result when Subtracting integers", () => {
    const req = getRequestObject("GET", ["subtract", 2, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 0 })
  })

  it("returns a valid result when Subtracting float numbers", () => {
    const req = getRequestObject("GET", ["subtract", 2.2, 2.2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 0 })
  })

  it("returns a valid result when Multiplying integers", () => {
    const req = getRequestObject("GET", ["multiply", 2, 3])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 6 })
  })

  it("returns a valid result when Multiplying float numbers", () => {
    const req = getRequestObject("GET", ["multiply", 3.5, 2.9])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 3.5 * 2.9 })
  })

  it("returns a valid result when Dividing integers", () => {
    const req = getRequestObject("GET", ["divide", 10, 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 5 })
  })

  it("returns a valid result when Dividing float numbers", () => {
    const req = getRequestObject("GET", ["divide", 20.2, 1.5])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 20.2 / 1.5 })
  })

  it("throws an error when Dividing by zero", () => {
    const req = getRequestObject("GET", ["divide", 20, 0])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({ message: "Can't divide by zero" })
  })
})

describe("Unsupported params", () => {
  it("throws an error if user submits a String instead of a number", () => {
    const req = getRequestObject("GET", ["add", "a", 2])
    const res = getResponseObject()

    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Failed to process query params. Received: ${req.query.params}`,
    })
  })
})

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
