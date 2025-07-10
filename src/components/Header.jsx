import AppBar from "@mui/material/AppBar";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const navItems = [
  { label: "المتجر", path: "/allProducts" },
  { label: "حول", path: "/about" },
  { label: "كروت الخصومات", path: "/gift-card" },
  { label: "تسجيل الدخول", icon: <PersonIcon />, path: "/login" },
  { label: "", icon: <ShoppingCartIcon />, path: "/cart" },
];

function Header() {
  return (
    <AppBar
      component="nav"
      style={{
        direction: "rtl",
        height: "18vh",
        background: "rgb(42 46 50 / 88%)",
        position: "absolute",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontSize: "50px",
            marginTop: "30px",
            marginRight: "50px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            غازى
          </Link>
        </Typography>

        {navItems.map(({ label, icon, path }, index) => (
          <Button
            key={index}
            component={Link}
            to={path}
            sx={{
              fontSize: "20px",
              marginTop: "50px",
              marginLeft: "30px",
              color: "white",
              textTransform: "none",
            }}
          >
            {label} {icon}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */

export default Header;
