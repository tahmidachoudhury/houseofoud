import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Slide from "@mui/material/Slide"
import Button from "@mui/material/Button"
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"

const drawerWidth = 240
const navItems = ["Shop", "Account", "Liked", "Cart"]
const rightItems = ["Account", "Liked", "Cart"]

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        House of Oud
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={`/${item}`}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ m: 0, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1 }}>
              <Button
                sx={{ color: "#fff", fontSize: { sm: "10px", md: "13px" } }}
              >
                <Link to="/shop">Shop</Link>
              </Button>
            </Box>

            <IconButton
              color="inherit"
              edge="start"
              sx={{ m: 0, p: 0.75, display: { sm: "none" } }}
            >
              <SearchIcon />
            </IconButton>

            <Button
              sx={{
                display: { xs: "block" },
                flex: 1,
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Link to="/home">
                <Typography variant="h6" component="div">
                  House Of Oud
                </Typography>
              </Link>
            </Button>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                flex: 1,
                textAlign: "right",
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  fontSize: { sm: "10px", md: "13px" },
                }}
              >
                <Link to={`/liked`}>liked</Link>
              </Button>

              <Button
                sx={{ color: "#fff", fontSize: { sm: "10px", md: "13px" } }}
              >
                <Link to={`/account`}>account</Link>
              </Button>

              <Button
                sx={{ color: "#fff", fontSize: { sm: "10px", md: "13px" } }}
                onClick={openCart}
              >
                <Link>cart({cartQuantity})</Link>
              </Button>
            </Box>

            <IconButton
              color="inherit"
              edge="start"
              sx={{ m: 0, p: 0.75, display: { sm: "none" } }}
            >
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton
              color="inherit"
              edge="start"
              sx={{ m: 0, p: 0.75, display: { sm: "none" } }}
            >
              <AccountCircleIcon />
            </IconButton>

            <IconButton
              color="inherit"
              onClick={() => {
                openCart()
              }}
              edge="start"
              sx={{ m: 0, p: 0.75, display: { sm: "none" } }}
            >
              <ShoppingBagTwoToneIcon />
            </IconButton>
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
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
