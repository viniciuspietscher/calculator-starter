import { Typography, Container, Stack } from "@mui/material"
import TestComponent from "../components/TestComponent"

export default function TestPage() {
  return (
    <Container maxWidth='sm'>
      <Stack>
        <Typography variant='h2' gutterBottom sx={{ marginBottom: "30px" }}>
          The Amazing Test Page
        </Typography>
        <TestComponent />
      </Stack>
    </Container>
  )
}
