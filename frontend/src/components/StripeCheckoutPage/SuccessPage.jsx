import { Button, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"

const SuccessPage = () => {
  return (
    <Stack spacing={2} useFlexGap>
      <Typography variant="h1">📦</Typography>
      <Typography variant="h5">Thank you for your order!</Typography>
      <Typography variant="body1" color="text.secondary">
        Your order number is
        <strong>&nbsp;#140396</strong>. We have emailed your order confirmation
        and will update you once its shipped.
      </Typography>
      <Button
        variant="contained"
        sx={{
          alignSelf: "start",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        Go to my orders
      </Button>
    </Stack>
  )
}

export default SuccessPage
