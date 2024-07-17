import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import FacebookIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/X"

const logoStyle = {
  width: "140px",
  height: "auto",
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">HouseofOud&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
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

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            py: 2,
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Services
          </Typography>
          <Link underline="none" color="text.secondary" href="#">
            Payments
          </Link>
          <Link underline="none" color="text.secondary" href="#">
            Returns
          </Link>
          <Link underline="none" color="text.secondary" href="#">
            Delivery
          </Link>
          <Link underline="none" color="text.secondary" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            py: 2,
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link underline="none" color="text.secondary" href="#">
            About us
          </Link>
          <Link underline="none" color="text.secondary" href="#">
            Careers
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            py: 2,
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Contact Information
          </Typography>
          <Typography>Orders, Billing, Shipping, General Questions</Typography>
          <Typography>
            <a title="test@test.com" href="mailto:test@test.com">
              test@test.com
            </a>
          </Typography>
          <Typography>
            Office:{" "}
            <a title="+44 1234 567 891" href="tel:+44 1234 567 891">
              +44 1234 567 891
            </a>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.tiktok.com/@houseofoudlondon"
            target="_blank"
            aria-label="TikTok"
            sx={{ alignSelf: "center" }}
          >
            <TikTokIcon />
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
      </Box>
    </Container>
  )
}
