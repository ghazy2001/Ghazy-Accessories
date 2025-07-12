import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardMedia, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import NewCollection from "./NewCollection";
import AboutS from "./AboutS";
import BestSellers from "./BestSellers";
import GiftCard from "./GiftCard";
function Home() {
  return (
    <>
      <Card
        sx={{
          color: "rgb(42 46 50 / 88%)",
          width: "100%",
          height: "100%",
          direction: "rtl",
          marginBottom: 3,
          background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            sx={{ marginRight: "60px" }}
          >
            غازى
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "65px",
            }}
          >
            <Typography variant="h3" sx={{ color: "text.secondary" }}>
              لجميع مستلزمات المطابخ الحديثة و الدريسنج رووم
            </Typography>

            <Typography
              component="a"
              href="/allProducts"
              sx={{
                color: "text.secondary",
                fontSize: 30,
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
                "&:after": {
                  content: '" ↗"',
                },
              }}
            >
              تسوق الأن{" "}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          height="100%"
          image="/big.jpg"
          alt="main pic"
          style={{ marginTop: "30px" }}
        />
      </Card>
      <NewCollection />
      <AboutS />
      <BestSellers />
      <GiftCard />
    </>
  );
}

export default Home;
