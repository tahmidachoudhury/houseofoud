import { Button, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"

const CancelPage = () => {
  return (
    <Stack spacing={2} useFlexGap>
      <Typography variant="h1">❌</Typography>
      <Typography variant="h5">Order has been cancelled</Typography>
      <Typography variant="body1" color="text.secondary">
        Please return to shopping cart and try again.
      </Typography>
      <a href="/checkout">
        <Button
          variant="outline-danger"
          size="sm"
          sx={{
            alignSelf: "start",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Checkout
        </Button>
      </a>
    </Stack>
  )
}

export default CancelPage
