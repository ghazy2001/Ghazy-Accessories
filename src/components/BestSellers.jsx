import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

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
]

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
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 5,
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textAlign: { xs: "center", sm: "right" },
        }}
      >
        الاكثر مبيع
      </Typography>
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
        {bestsellers.map((item) => (
          <Grid item xs={6} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                background: "linear-gradient(to top, white, rgb(42 46 50 / 88%))",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                p: { xs: 1, sm: 1.5, md: 2 },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: "120px", sm: "160px", md: "200px" },
                  objectFit: "cover",
                  borderRadius: 1,
                  mb: { xs: 1, sm: 1.5, md: 2 },
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "medium",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    color: "rgb(42 46 50 / 88%)",
                    lineHeight: 1.2,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="rgb(42 46 50 / 88%)"
                  sx={{
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    fontWeight: "600",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BestSellers
