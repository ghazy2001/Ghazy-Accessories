import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const bestsellers = [
  {
    id: 1,
    title: "مفصلة سامت تركى سوفت كلوز 3D عدلة ",
    image: "/4.jpg",
    description: "السعر : 60 جنيه",
  },
  {
    id: 2,
    title: "مفصلة تايتوس سلوفانى سوفت كلوز عدلة ",
    image: "/5.jpg",
    description: "السعر : 100 جنيه",
  },
  {
    id: 3,
    title: "مجرى جانبى FGV ايطالى سوفت كلوز مقاس 50 سم",
    image: "/6.jpg",
    description: "السعر : 250 جنيه",
  },
  {
    id: 4,
    title: "مجرى سفلى بجانب معدنى ايطالى 50 سم fgv  مرحلتين سوفت كلوز",
    image: "/7.jpg",
    description: "السعر : 720 ",
  },
];

function BestSellers() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",

        margin: "0 auto",
        padding: "20px 15px",
        direction: "rtl",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 5, fontWeight: "bold" }}>
        الاكثر مبيع
      </Typography>
      <Grid container spacing={5}>
        {bestsellers.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                background:
                  "linear-gradient(to top, white, rgb(42 46 50 / 88%))",

                height: "auto",
                width: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                p: 1.5,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "medium",
                    fontSize: "30px",
                    color: "rgb(42 46 50 / 88%)",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="rgb(42 46 50 / 88%)"
                  sx={{ fontSize: "20px" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BestSellers;
