import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination,
  Box,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "مفصلة samet تركى عدلة سوفت كلوز 3D",
    price: "$58.00",
    image: "/4.jpg",
  },
  {
    id: 2,
    title: "مفصلة تايتوس سلوفانى عدلة سوفت كلوز ",
    price: "$100.00",
    image: "/5.jpg",
  },
  {
    id: 3,
    title: "مجرى جانبى fgv ايطالى مقاس 50 سم سوفت كلوز",
    price: "$250.00",
    image: "/6.jpg",
  },
  {
    id: 4,
    title: "مجرى سفلى 50 سم دانكو فضى مرحلتين سوفت كلوز ",
    price: "$290.00",
    image: "/34.jpg",
  },
  {
    id: 5,
    title: "مجرى سفلى بجانب معدنى مرحلة واحدة سوفت كلوز fgv ايطالى",
    price: "$480.00",
    image: "/7.jpg",
  },

  {
    id: 6,
    title: "شماعة بيضاوى",
    price: "$110.00",
    image: "/9.jpg",
  },
  {
    id: 7,
    title: "عود مقبض حفر فضى تقيل",
    price: "$280.00",
    image: "/10.jpg",
  },
  {
    id: 8,
    title: "مقبض لطش 30 سم الوان (اسود , نحاسى , رصاصى ,  دهبى)",
    price: "$30.00",
    image: "/11.jpg",
  },
  {
    id: 9,
    title: "عود ضلفة زجاج بدون مقبض اسود تقيل",
    price: "$280.00",
    image: "/12.jpg",
  },
  {
    id: 10,
    title: "عود مقبض حرف G اسود وسط",
    price: "$250.00",
    image: "/13.jpg",
  },
  {
    id: 11,
    title: "عود مقبض لطش فضى وسط",
    price: "$250.00",
    image: "/14.jpg",
  },
  {
    id: 12,
    title: "هواية المنيوم فضى 30 سم",
    price: "$48.00",
    image: "/15.jpg",
  },
  {
    id: 13,
    title: "غراء سريع aple",
    price: "$130.00",
    image: "/16.jpg",
  },
  {
    id: 14,
    title: "رجول وزرة (الطقم 4 )",
    price: "$15.00",
    image: "/17.jpg",
  },
  {
    id: 15,
    title: "فراشة حديد تقيلة",
    price: "$7.00",
    image: "/18.jpg",
  },
  {
    id: 16,
    title: "باسكت زبالة 2 عين مصرى",
    price: "$720.00",
    image: "/19.jpg",
  },
  {
    id: 17,
    title: "ماجيك كورنر متعدد ",
    price: "$3500.00",
    image: "/20.jpg",
  },
  {
    id: 18,
    title: "صفاية 80 سم ويل ماكس",
    price: "$700.00",
    image: "/21.jpg",
  },
  {
    id: 19,
    title: "تقسيمة درج بلاستيك 50 سم",
    price: "$170.00",
    image: "/22.jpg",
  },
  {
    id: 20,
    title: "ماسورة مطبخ 4 م ",
    price: "$120.00",
    image: "/23.jpg",
  },
  {
    id: 21,
    title: "ماجيك كورنر مخفى",
    price: "$2800.00",
    image: "/24.jpg",
  },
  {
    id: 22,
    title: "مقبض زرار اسود",
    price: "$18.00",
    image: "/25.jpg",
  },
  {
    id: 23,
    title: "مقبض حرف U (3 م )",
    price: "$250.00",
    image: "/26.jpg",
  },
  {
    id: 24,
    title: "مقبض ماسورة فضى 128",
    price: "$10.00",
    image: "/27.jpg",
  },
  {
    id: 25,
    title: "مسمار سن صاج فضى",
    price: "$95.00",
    image: "/28.jpg",
  },
  {
    id: 26,
    title: "تكاية رف شفافة",
    price: "$1.00",
    image: "/29.jpg",
  },
  {
    id: 27,
    title: "تكاية رف عادية",
    price: "$0.20",
    image: "/30.jpg",
  },
  {
    id: 28,
    title: "كعب مسمار بلاستيك 18 مل",
    price: "$0.50",
    image: "/31.jpg",
  },
  {
    id: 29,
    title: "حرف S",
    price: "$8.00",
    image: "/32.jpg",
  },
  {
    id: 30,
    title: "تكاية رف زجاج",
    price: "$7.00",
    image: "/33.jpg",
  },
];

function AllProducts() {
  const [page, setPage] = useState(1);
  const productsPerPage = 8;
  const count = Math.ceil(products.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} تم إضافته إلى العربة`);
  };

  const displayedProducts = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <Box
      sx={{
        background: "linear-gradient(to top, white, rgb(42 46 50 / 88%))",

        padding: "2rem",
        direction: "rtl",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "700", mb: 4, color: "white" }}
      >
        جميع المنتجات
      </Typography>
      <Grid container spacing={4}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                background:
                  "linear-gradient(to top, white, rgb(42 46 50 / 88%))",

                color: "rgb(42 46 50 / 88%)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="400vh"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <CardContent sx={{ flexGrow: 1, px: 2, pt: 2 }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontWeight: "700",
                    color: "rgb(42 46 50 / 88%)",
                    minHeight: "3rem",
                    fontSize: 25,
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontWeight: "700",
                    color: "#ff6f61",
                    fontSize: "20px",
                  }}
                >
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  onClick={() => addToCart(product)}
                  size="small"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#ff6f61",
                    "&:hover": {
                      backgroundColor: "#e65b50",
                    },
                    fontWeight: "700",
                    textTransform: "none",
                    borderRadius: 1,
                    fontSize: "20px",
                  }}
                >
                  اضافة الى العربة
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6,
          "& .MuiPaginationItem-root": {
            fontWeight: "700",
            color: "#2a2e32",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#ff6f61",
            color: "#fff",
          },
        }}
      />
    </Box>
  );
}

export default AllProducts;
