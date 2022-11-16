import { Button as MUIButton } from "@mui/material"
import PropTypes from "prop-types"

export default function Button({
  children = "Click me",
  variant = "contained",
  color = "primary",
  size = "medium",
  type = "submit",
}) {
  return (
    <MUIButton variant={variant} color={color} size={size} type={type}>
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", "outlined", "disabled"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "error"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
}
