import { Box } from "@mui/system"
import React from "react"

export default function SizeButton(props) {
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: "1.5rem",
        display: "inline-block",
        px: 2,
        py: 0.6,
        mx: 0.5,
        fontSize: "12px",
      }}
    >
      {props.size}
    </Box>
  )
}
