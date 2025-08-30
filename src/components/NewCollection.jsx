import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"

function NewCollection() {
  return (
    <Card
      sx={{
        minHeight: { xs: "100vh", md: "120vh" },
        direction: "rtl",
        p: { xs: 2, sm: 3, md: 4 },
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        color: "#5a5a5a",
        marginBottom: 3,
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ marginTop: { xs: "5vh", md: "10vh" } }}>
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ marginTop: { xs: "2vh", md: "10vh" } }}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                mb: 2,
                textAlign: "right",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                marginRight: { xs: "2vh", md: "10vh" },
              }}
              color="#5a5a5a"
            >
              احدث الاصدارات
            </Typography>
            <Typography
              variant="h2"
              color="#5a5a5a"
              sx={{
                mb: 4,
                textAlign: "right",
                marginRight: { xs: "2vh", md: "10vh" },
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                lineHeight: 1.4,
              }}
            >
              اضف لمسة جديدة الى حياتك اليومية لجعل يومك اكثر تميز
            </Typography>
          </CardContent>
        </Grid>

        {/* Second Image */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 3, md: 2 } }}>
          <CardMedia
            component="img"
            image="/5.jpg"
            alt="second pic"
            sx={{
              height: { xs: "40vh", sm: "50vh", md: "60vh" },
              width: "100%",
              maxWidth: { xs: "100%", md: "80vh" },
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: { xs: "auto", md: "10vh" },
              marginTop: { xs: 2, md: 41 },
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* First Image */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 3 } }}>
          <CardMedia
            component="img"
            image="/third.jpg"
            alt="third pic"
            sx={{
              height: { xs: "50vh", md: "100%" },
              width: "100%",
              maxWidth: { xs: "100%", md: "80vh" },
              borderRadius: 5,
              transform: { xs: "none", md: "rotate(180deg)" },
              marginBottom: { xs: 2, md: "20vh" },
              marginRight: { xs: "auto", md: "10vh" },
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default NewCollection
