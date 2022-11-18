export const add = (first: number, second: number): number => {
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) + Number(second)
  }
  throw new Error("Must be a number")
}

export const subtract = (first: number, second: number): number => {
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) - Number(second)
  }
  throw new Error("Must be a number")
}

export const multiply = (first: number, second: number): number => {
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) * Number(second)
  }
  throw new Error("Must be a number")
}

export const divide = (first: number, second: number): number => {
  if (Number(second) === 0) {
    throw new Error("Can't divide by zero")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) / Number(second)
  }
  throw new Error("Must be a number")
}
