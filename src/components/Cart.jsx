"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom" // Added useNavigate for navigation
import {
  Card,
  Typography,
  Button,
  List,
  ListItem,
  Avatar,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
  Divider,
  Badge, // Added Badge for cart count display
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart" // Added cart icon

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [notification, setNotification] = useState({ open: false, message: "", severity: "success" })
  const navigate = useNavigate() // Initialize navigation hook

  useEffect(() => {
    setTimeout(() => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      setCartItems(cart)
      setLoading(false)
    }, 500)
  }, [])

  const showNotification = (message, severity = "success") => {
    setNotification({ open: true, message, severity })
  }

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
      }
      return item
    })
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    showNotification("تم تحديث الكمية بنجاح")
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    showNotification("تم حذف المنتج من العربة", "info")
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotification("العربة فارغة", "warning")
      return
    }
    showNotification("جاري التوجه للدفع...", "info")
    setTimeout(() => {
      setCartItems([])
      localStorage.removeItem("cart")
      showNotification("تم إتمام الطلب بنجاح!", "success")
    }, 2000)
  }

  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleBrowseProducts = () => {
    navigate("/allProducts")
  }

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = Number.parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
    return total + priceNumber * item.quantity
  }, 0)

  if (loading) {
    return (
      <Card
        sx={{
          margin: "auto",
          width: "100%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #ffffff, rgba(42, 46, 50, 0.9))",
        }}
      >
        <CircularProgress size={60} />
      </Card>
    )
  }

  return (
    <>
      <Card
        sx={{
          margin: "auto",
          direction: "rtl",
          background: "linear-gradient(to bottom, #ffffff, rgba(42, 46, 50, 0.9))",
          width: "100%",
          height: "auto",
          paddingTop: { xs: 2, sm: 3, md: 5 },
          px: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 2, sm: 3, md: 4 },
          boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: 2, sm: 3, md: 4 } }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px" },
              fontWeight: "bold",
              textAlign: { xs: "center", sm: "right" },
            }}
          >
            عربة التسوق
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "bold",
                color: "#1976d2",
              }}
            >
              ({totalItemsCount} منتج)
            </Typography>
            <Badge
              badgeContent={totalItemsCount}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: { xs: "14px", sm: "16px" },
                  minWidth: { xs: "24px", sm: "28px" },
                  height: { xs: "24px", sm: "28px" },
                  fontWeight: "bold",
                  animation: totalItemsCount > 0 ? "pulse 2s infinite" : "none",
                },
                "@keyframes pulse": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.1)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "36px" },
                  color: "#1976d2",
                }}
              />
            </Badge>
          </Box>
        </Box>

        {cartItems.length === 0 ? (
          <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 } }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "24px" },
                mb: 3,
              }}
            >
              العربة فارغة
            </Typography>
            <Button
              variant="contained"
              onClick={handleBrowseProducts} // Added navigation handler
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              تصفح المنتجات
            </Button>
          </Box>
        ) : (
          <>
            <List
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                paddingRight: 0,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    mb: { xs: 2, md: 3 },
                    padding: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: { xs: 2, md: 3 },
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      gap: { xs: 2, sm: 3 },
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: { xs: 120, sm: 150, md: 200 },
                        height: { xs: 90, sm: 112, md: 150 },
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />

                    <Box
                      sx={{
                        flex: 1,
                        textAlign: { xs: "center", sm: "right" },
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "18px", md: "22px" },
                          fontWeight: "bold",
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", sm: "16px", md: "18px" },
                          color: "#d32f2f",
                          overflowWrap: "break-word",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: { xs: 2, sm: 3 },
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        order: { xs: 1, sm: 2 },
                      }}
                    >
                      <Button
                        onClick={() => updateQuantity(item.id, -1)}
                        variant="contained"
                        size="small"
                        sx={{
                          minWidth: { xs: 32, md: 40 },
                          height: { xs: 32, md: 40 },
                          fontSize: { xs: "14px", md: "16px" },
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        }}
                      >
                        -
                      </Button>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", md: "18px" },
                          fontWeight: "bold",
                          minWidth: { xs: 24, md: 32 },
                          textAlign: "center",
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <Button
                        onClick={() => updateQuantity(item.id, 1)}
                        variant="contained"
                        size="small"
                        sx={{
                          minWidth: { xs: 32, md: 40 },
                          height: { xs: 32, md: 40 },
                          fontSize: { xs: "14px", md: "16px" },
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        }}
                      >
                        +
                      </Button>
                    </Box>

                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        px: { xs: 2, sm: 3 },
                        py: { xs: 1, sm: 1.5 },
                        order: { xs: 2, sm: 1 },
                        backgroundColor: "#d32f2f",
                        "&:hover": {
                          backgroundColor: "#9a0007",
                        },
                      }}
                    >
                      إزالة
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                mt: { xs: 3, md: 4 },
                p: { xs: 2, md: 3 },
                background: "#d32f2f",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "18px", sm: "24px", md: "32px" },
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                }}
              >
                الاجمالى : {totalPrice.toFixed(2)} جنيه
              </Typography>
              <Divider sx={{ bgcolor: "white", opacity: 0.3, my: 2 }} />
              <Button
                onClick={handleCheckout}
                variant="contained"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  backgroundColor: "white",
                  color: "#d32f2f",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    transform: "scale(1.02)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                إتمام الطلب
              </Button>
            </Box>
          </>
        )}
      </Card>

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setNotification({ ...notification, open: false })}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Cart
