import Grid2 from "@mui/material/Unstable_Grid2"
import {
  Box,
  Paper,
  TextField,
  FormControl,
  NativeSelect,
  Button,
  Divider,
  Typography,
} from "@mui/material"
import { OutlinedInput } from "@mui/material"
import axios from "axios"

import { useState } from "react"
import Link from "next/link"

const Calculator = () => {
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setOperation(e.target.value)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    const query = {
      operation: operation,
      first: e.target.first.value,
      second: e.target.second.value,
    }

    axios
      .get(`/api/calculate/${query.operation}/${query.first}/${query.second}`)
      .then((res) => {
        setResult(res.data.result)
      })
      .catch((err) => {
        setResult(err.response.data.message)
      })
  }

  return (
    <>
      <Link href='/testPage'>Visit Test Page</Link>
      <form id='calculator-form' onSubmit={handleCalculate}>
        <Grid2 container spacing={1}>
          <Grid2 xs={5}>
            <FormControl fullWidth>
              <TextField id='first' label='First Number' variant='outlined' />
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
                <option value=''>Op</option>
                <option value={"add"}>+</option>
                <option value={"subtract"}>-</option>
                <option value={"multiply"}>*</option>
                <option value={"divide"}>/</option>
              </NativeSelect>
            </FormControl>
          </Grid2>
          <Grid2 xs={5}>
            <FormControl fullWidth>
              <TextField id='second' label='Second Number' variant='outlined' />
            </FormControl>
          </Grid2>
          <Grid2 xs={12}>
            <FormControl fullWidth>
              <Button variant='contained' type='submit'>
                Calculate
              </Button>
            </FormControl>
          </Grid2>
          <Grid2 xs={12}>
            <Divider />
          </Grid2>
          <Grid2 xs={12}>
            <Box>
              <Paper>
                <Typography
                  align='center'
                  variant='h3'
                  gutterBottom
                  id='result'
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
export default Calculator
