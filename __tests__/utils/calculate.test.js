import { add, subtract, multiply, divide } from "../../utils/calculate"

describe("add operation", () => {
  test("adds two numbers", () => {
    expect(add(4, 2)).toBe(6)
    expect(add(-4, 2)).toBe(-2)
    expect(add(-4, -2)).toBe(-6)
    expect(add(4.5, 2.1)).toBe(6.6)
  })
  test("don't accept null or empty string as parameter", () => {
    expect(() => add("", 1)).toThrow("Must provide a number")
    expect(() => add(null, 1)).toThrow("Must provide a number")
    expect(() => add(1, null)).toThrow("Must provide a number")
    expect(() => add(1, "")).toThrow("Must provide a number")
  })
})

describe("subtract operation", () => {
  test("subtract two numbers", () => {
    expect(subtract(4, 2)).toBe(2)
    expect(subtract(-4, 2)).toBe(-6)
    expect(subtract(-4, -2)).toBe(-2)
    expect(subtract(4.5, 2.1)).toBe(2.4)
  })
  test("don't accept null or empty string as parameter", () => {
    expect(() => subtract("", 1)).toThrow("Must provide a number")
    expect(() => subtract(null, 1)).toThrow("Must provide a number")
    expect(() => subtract(1, null)).toThrow("Must provide a number")
    expect(() => subtract(1, "")).toThrow("Must provide a number")
  })
})

describe("multiply operation", () => {
  test("multiply two numbers", () => {
    expect(multiply(4, 2)).toBe(8)
    expect(multiply(-4, 2)).toBe(-8)
    expect(multiply(-4, -2)).toBe(8)
    expect(multiply(2.1, 2)).toBe(4.2)
  })
  test("don't accept null or empty string as parameter", () => {
    expect(() => multiply("", 1)).toThrow("Must provide a number")
    expect(() => multiply(null, 1)).toThrow("Must provide a number")
    expect(() => multiply(1, null)).toThrow("Must provide a number")
    expect(() => multiply(1, "")).toThrow("Must provide a number")
  })
})

describe("divide operation", () => {
  test("divide two numbers", () => {
    expect(divide(4, 2)).toBe(2)
    expect(divide(-4, 2)).toBe(-2)
    expect(divide(-4, -2)).toBe(2)
    expect(divide(6.4, 2)).toBe(3.2)
  })
  test("can't divide by zero", () => {
    expect(() => {
      divide(2, 0)
    }).toThrow("Can't divide by zero")
  })
  test("don't accept null or empty string as parameter", () => {
    expect(() => divide("", 1)).toThrow("Must provide a number")
    expect(() => divide(null, 1)).toThrow("Must provide a number")
    expect(() => divide(1, null)).toThrow("Must provide a number")
    expect(() => divide(1, "")).toThrow("Must provide a number")
  })
})

describe("types of input values", () => {
  test("converts number in string to number", () => {
    expect(add(2, "2")).toBe(4)
    expect(add("2", "2")).toBe(4)
  })
  test("throw error when receiving a string that is not a number", () => {
    // add
    expect(() => add(2, "a")).toThrow("Must be a number")
    expect(() => add("a", "a")).toThrow("Must be a number")
    expect(() => add("a", "1")).toThrow("Must be a number")
    expect(() => add("a", 2)).toThrow("Must be a number")
    // subtract
    expect(() => subtract(2, "a")).toThrow("Must be a number")
    expect(() => subtract("a", "a")).toThrow("Must be a number")
    expect(() => subtract("a", "1")).toThrow("Must be a number")
    expect(() => subtract("a", 2)).toThrow("Must be a number")
    // multiply
    expect(() => multiply(2, "a")).toThrow("Must be a number")
    expect(() => multiply("a", "a")).toThrow("Must be a number")
    expect(() => multiply("a", "1")).toThrow("Must be a number")
    expect(() => multiply("a", 2)).toThrow("Must be a number")
    // divide
    expect(() => divide(2, "a")).toThrow("Must be a number")
    expect(() => divide("a", "a")).toThrow("Must be a number")
    expect(() => divide("a", "1")).toThrow("Must be a number")
    expect(() => divide("a", 2)).toThrow("Must be a number")
  })
})
