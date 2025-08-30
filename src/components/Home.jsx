import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { CardMedia, Box } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import NewCollection from "./NewCollection"
import AboutS from "./AboutS"
import BestSellers from "./BestSellers"
import GiftCard from "./GiftCard"
import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Card
        sx={{
          color: "rgb(42 46 50 / 88%)",
          width: "100%",
          height: { xs: "auto", md: "100%" },
          direction: "rtl",
          marginBottom: 3,
          background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            sx={{
              marginRight: { xs: "20px", sm: "40px", md: "60px" },
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            }}
          >
            غازى
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              marginRight: { xs: "20px", sm: "40px", md: "65px" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" },
              }}
            >
              لجميع مستلزمات المطابخ الحديثة و الدريسنج رووم
            </Typography>

            <Typography
              component="span"
              onClick={() => navigate("/allProducts")}
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
                "&:after": {
                  content: '" ↗"',
                },
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              تسوق الأن{" "}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            height: { xs: "300px", sm: "400px", md: "auto" },
            objectFit: "cover",
            marginTop: { xs: "15px", sm: "20px", md: "30px" },
          }}
          image="/big.jpg"
          alt="main pic"
        />
      </Card>
      <NewCollection />
      <AboutS />
      <BestSellers />
      <GiftCard />
    </>
  )
}

export default Home
