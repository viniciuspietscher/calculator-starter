import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { initialize, mswDecorator } from "msw-storybook-addon"

initialize()

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
})

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider, mswDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
