"use client"

import AppBar from "@mui/material/AppBar"
import PersonIcon from "@mui/icons-material/Person"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "react-router-dom"
import { useState } from "react"

const navItems = [
  { label: "المتجر", path: "/allProducts" },
  { label: "حول", path: "/about" },
  { label: "كروت الخصومات", path: "/gift-card" },
  { label: "تسجيل الدخول", icon: <PersonIcon />, path: "/login" },
  { label: "العربة", icon: <ShoppingCartIcon />, path: "/cart" },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map(({ label, icon, path }, index) => (
          <ListItem key={index} component={Link} to={path} sx={{ justifyContent: "center" }}>
            <ListItemText primary={label} sx={{ textAlign: "center" }} />
            {icon}
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          direction: "rtl",
          minHeight: { xs: "56px", sm: "64px", md: "80px" },
          background: "rgb(42 46 50 / 88%)",
          position: "fixed",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            py: { xs: 0.5, sm: 1, md: 1.5 },
            justifyContent: "space-between",
            minHeight: { xs: "56px", sm: "64px", md: "80px" },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px" },
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              flexGrow: { xs: 1, md: 0 },
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              غازى
            </Link>
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            {navItems.map(({ label, icon, path }, index) => (
              <Button
                key={index}
                component={Link}
                to={path}
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  fontSize: { md: "14px", lg: "16px" },
                  color: "white",
                  textTransform: "none",
                  mx: 0.5,
                  minWidth: "auto",
                  px: 1,
                }}
              >
                {label} {icon}
              </Button>
            ))}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                ml: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240, direction: "rtl" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header
