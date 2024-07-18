import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React from "react"

const CancelPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="left"
      my={{ xs: "10px", sm: "62px" }}
      mx="20px"
    >
      <Stack spacing={2} useFlexGap>
        <Typography variant="h1">❌</Typography>
        <Typography variant="h5">Order has been cancelled</Typography>
        <Typography variant="body1" color="text.secondary">
          Please return to shopping cart and try again.
        </Typography>
      </Stack>
    </Box>
  )
}

export default CancelPage
