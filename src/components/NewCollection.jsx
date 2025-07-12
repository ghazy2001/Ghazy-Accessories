import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

function NewCollection() {
  return (
    <Card
      sx={{
        minHeight: "150vh",
        direction: "rtl",
        p: 3,
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        color: "#5a5a5a",
        marginBottom: 3,
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "10vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 4,
        }}
      >
        <Grid item xs={12} md={6} sx={{ gridColumn: "1/ 2", gridRow: "1 / 2" }}>
          <CardContent style={{ marginTop: "10vh" }}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                mb: 2,
                textAlign: "right",
                marginRight: "10vh",
              }}
              color="#5a5a5a"
            >
              احدث الاصدارات
            </Typography>
            <Typography
              variant="h2"
              color="#5a5a5a"
              sx={{ mb: 4, textAlign: "right", marginRight: "10vh" }}
            >
              اضف لمسة جديدة الى حياتك اليومية لجعل يومك اكثر تميز
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} sx={{ gridColumn: "1/ 2", gridRow: "2 / 2" }}>
          <CardMedia
            component="img"
            image="/secound.jpg"
            alt="second pic"
            sx={{
              height: "60vh",
              width: "80vh",
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: "10vh",
              marginTop: 41,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ gridColumn: "2 / 2", gridRow: "1/ 3" }}>
          <CardMedia
            component="img"
            image="/public/third.jpg"
            alt="third pic"
            sx={{
              height: "100%",
              width: "80vh",
              borderRadius: 5,
              transform: "rotate(180deg)",
              marginBottom: "20vh",
              marginRight: "10vh",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default NewCollection;
