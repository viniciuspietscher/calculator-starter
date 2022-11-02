export const add = (first, second) => {
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) + Number(second)
  }
  throw new Error("Must be a number")
}

export const subtract = (first, second) => {
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) - Number(second)
  }
  throw new Error("Must be a number")
}

export const multiply = (first, second) => {
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) * Number(second)
  }
  throw new Error("Must be a number")
}

export const divide = (first, second) => {
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (Number(second) === 0) {
    throw new Error("Can't divide by zero")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) / Number(second)
  }
  throw new Error("Must be a number")
}
