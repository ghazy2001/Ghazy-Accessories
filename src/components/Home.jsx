import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
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
          <Typography
            variant="h3"
            sx={{ color: "text.secondary", marginRight: "70px" }}
          >
            لجميع مستلزمات المطابخ الحديثة و الدريسنج رووم
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="100%"
          image="/public/big.jpg"
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
