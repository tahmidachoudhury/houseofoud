import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Slide from "@mui/material/Slide"
import Button from "@mui/material/Button"
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone"
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { ThemeProvider } from "@mui/material/"
import { themeOptions } from "../../themes/Theme"

const drawerWidth = 240

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function DrawerAppBar(props) {
  const { openCart, cartQuantity } = useShoppingCart()
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: { xs: "transparent" },
            boxShadow: "none",
            position: { xs: "relative", sm: "fixed" },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="black"
              aria-label="to shop page"
              edge="start"
              sx={{
                m: 0,
                display: { sm: "none" },
                flex: 1,
                justifyContent: "left",
              }}
            >
              <Link to="/shop">
                <ShoppingBagTwoToneIcon />
              </Link>
            </IconButton>
            <ThemeProvider theme={themeOptions}>
              <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1 }}>
                <Button>
                  <Link to="/shop">Shop</Link>
                </Button>
              </Box>

              <Button sx={{ width: "fit-content" }}>
                <Link to="/">
                  <Typography variant="h6" component="div">
                    House of oud
                  </Typography>
                </Link>
              </Button>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flex: 1,
                  textAlign: "right",
                  justifyContent: "right",
                }}
              >
                <Button sx={{ color: "#fff" }} onClick={openCart}>
                  <Link>cart({cartQuantity})</Link>
                </Button>
              </Box>
            </ThemeProvider>
            <Box
              display={{ xs: "flex", sm: "none" }}
              justifyContent="right"
              flex={1.26}
            >
              <IconButton
                color="black"
                onClick={() => {
                  openCart()
                }}
                edge="start"
                sx={{ m: 0, p: 0.75 }}
              >
                <ShoppingCartTwoToneIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {}
        </Drawer>
      </nav>
    </Box>
  )
}
