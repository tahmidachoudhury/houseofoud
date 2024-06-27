import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import IconButton from "@mui/material/IconButton"
import StoreIcon from "@mui/icons-material/Store"
import Toolbar from "@mui/material/Toolbar"

function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            href="https://vt.tiktok.com/ZGegn7qVR/?page=TikTokShop"
            edge="start"
            sx={{ mr: 2 }}
          >
            <StoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default DrawerAppBar
