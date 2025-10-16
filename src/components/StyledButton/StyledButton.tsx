import React from "react"
import { styled } from "@mui/material/styles"
import type { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}

const Root = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: 6,
  padding: "8px 16px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontSize: 14,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const StyledButton: React.FC<Props> = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>
}

export default StyledButton