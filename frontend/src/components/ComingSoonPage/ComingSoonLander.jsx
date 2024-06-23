import { Grid, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { createTheme } from "@mui/material/styles"
import Stack from "@mui/material/Stack"
import { ThemeProvider } from "@mui/material/styles"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/X"

const Montserrat = createTheme({
  typography: {
    fontFamily: ["Abel", "Montserrat", "Open Sans"].join(","),
  },
})

const Anton = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "Montserrat", "Open Sans"].join(","),
    color: "white",
  },
})

function Copyright() {
  return (
    <ThemeProvider theme={Montserrat}>
      <Typography variant="body2" color="text.primary">
        {"Copyright © "}
        HouseofOud&nbsp;
        {new Date().getFullYear()}
      </Typography>
    </ThemeProvider>
  )
}

const TikTokIcon = ({ color = "rgba(0, 0, 0, 0.6)" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24px"
      height="inherit"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(
          "https://fastly.picsum.photos/id/185/3995/2662.jpg?hmac=gXqQYKLwRcZNsxrWGW6YosAXEIU6-D7UbytF_ApGmDs"
        )`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        spacing={0}
        flex={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Box sx={{ textAlign: "center" }}>
            <ThemeProvider theme={Montserrat}>
              <Typography variant="h5">
                WE ARE LAUNCHING OUR WEBSITE SOON
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={Anton}>
              <Typography variant="h1">House of Oud</Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 8 },
          pb: 8,
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="left"
          spacing={10}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="red"
            href="https://www.tiktok.com/@houseofoudlondon"
            target="_blank"
            aria-label="TikTok"
            sx={{ alignSelf: "center" }}
          >
            <TikTokIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            target="_blank"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/houseofoudlondon?igsh=MWZ6NDhmZTczdTE2Mg=="
            target="_blank"
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
        <Box sx={{ pt: 2 }}>
          <Copyright />
        </Box>
      </Box>
    </Box>
  )
}
