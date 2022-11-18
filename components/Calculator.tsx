import Grid2 from "@mui/material/Unstable_Grid2"
import {
  Box,
  Paper,
  TextField,
  FormControl,
  NativeSelect,
  Divider,
  Typography,
} from "@mui/material"
import { OutlinedInput } from "@mui/material"
import axios from "axios"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const Calculator = ({
  variant = "contained",
  color = "primary",
  label = "Calculate",
  size = "medium",
}) => {
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")
  const first = useRef<HTMLInputElement>(null)
  const second = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value)
  }

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (first.current && second.current) {
       const query = {
        operation: operation,
        first: first.current.value,
        second: second.current.value
      }
       axios
      .get(`/api/calculate/${query.operation}/${query.first}/${query.second}`)
      .then((res) => {
        setResult(res.data.result)
      })
      .catch((err) => {
        setResult(err.response.data.message)
      })
    } else {
      console.log("something went wrong")
    }
  }

  return (
    <>
      {/* <Link href='/testPage'>Visit Test Page</Link> */}
      <form id="calculator-form" onSubmit={handleCalculate}>
        <Grid2 container spacing={1}>
          <Grid2 xs={5}>
            <FormControl fullWidth>
              <TextField
                id="first"
                // type="number"
                label="First Number"
                variant="outlined"
                inputRef={first}
              />
            </FormControl>
          </Grid2>
          <Grid2 xs={2}>
            <FormControl fullWidth>
              <NativeSelect
                input={<OutlinedInput />}
                defaultValue={""}
                inputProps={{
                  name: "operation",
                  id: "operation",
                }}
                onChange={handleChange}
              >
                <option value="">Op</option>
                <option value={"add"}>+</option>
                <option value={"subtract"}>-</option>
                <option value={"multiply"}>*</option>
                <option value={"divide"}>/</option>
              </NativeSelect>
            </FormControl>
          </Grid2>
          <Grid2 xs={5}>
            <FormControl fullWidth>
              <TextField
                id="second"
                // type="number"
                label="Second Number"
                variant="outlined"
                inputRef={second}
              />
            </FormControl>
          </Grid2>
          <Grid2 xs={12}>
            <FormControl fullWidth>
              <Button
                variant={variant}
                color={color}
                size={size}
                label={label}
                type="submit"
              />
            </FormControl>
          </Grid2>
          <Grid2 xs={12}>
            <Divider />
          </Grid2>
          <Grid2 xs={12}>
            <Box>
              <Paper>
                <Typography
                  align="center"
                  variant="h3"
                  gutterBottom
                  id="result"
                >
                  {result}
                </Typography>
              </Paper>
            </Box>
          </Grid2>
        </Grid2>
      </form>
    </>
  )
}

Calculator.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", "outlined", "disabled"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "error"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
}

export default Calculator
