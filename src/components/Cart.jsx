import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <Card
      sx={{
        margin: "auto",
        direction: "rtl",
        background:
          "linear-gradient(to bottom, #ffffff, rgba(42, 46, 50, 0.9))",
        width: "100%",

        height: "auto",
        paddingTop: 5,

        boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontSize: 32, fontWeight: "bold", marginBottom: 4 }}
      >
        عربة التسوق
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          variant="h4"
          sx={{
            fontSize: 24,
            textAlign: "center",
          }}
        >
          العربة فارغة
        </Typography>
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
                secondaryAction={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      minWidth: 80,
                      maxWidth: 100,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 8,
                        marginRight: 430,
                        marginTop: 10,
                      }}
                    >
                      <Button
                        onClick={() => updateQuantity(item.id, 1)}
                        variant="contained"
                        size="medium"
                        sx={{
                          minWidth: 36,
                          fontSize: 19,
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        }}
                      >
                        +
                      </Button>
                      <div style={{ marginTop: 10, fontSize: 30 }}>
                        {" "}
                        {item.quantity}
                      </div>
                      <Button
                        onClick={() => updateQuantity(item.id, -1)}
                        variant="contained"
                        size="medium"
                        sx={{
                          minWidth: 36,
                          fontSize: 19,
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        }}
                      >
                        -
                      </Button>
                    </Box>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="contained"
                      color="secondary"
                      size="medium"
                      sx={{
                        width: 200,
                        fontSize: 20,
                        marginRight: 430,
                        backgroundColor: "#d32f2f",
                        "&:hover": {
                          backgroundColor: "#9a0007",
                        },
                      }}
                    >
                      إزالة
                    </Button>
                  </Box>
                }
                sx={{
                  mb: 2,
                  padding: 16,
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 300,
                      height: 200,
                      mr: 2,
                      borderRadius: 4,
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "right",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        marginRight: 5,
                      }}
                    >
                      {item.title} (الكمية: {item.quantity})
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        fontSize: 22,
                        color: "#d32f2f",
                        textAlign: "right",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        marginRight: 5,
                      }}
                    >
                      {item.price}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography
            variant="h2"
            sx={{
              mt: 32,
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "right",
              color: "whitesmoke",
              marginTop: 13,
              marginBottom: 12,
              marginRight: 10,
              background: "#d32f2f",
              padding: 5,
            }}
          >
            الاجمالى : {totalPrice.toFixed(2)} جنيه
          </Typography>
        </>
      )}
    </Card>
  );
}

export default Cart;
