import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function GiftCard() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "90vh",

        boxShadow: "none",
        borderRadius: 0,
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "60%",
          objectFit: "cover",
          height: "90%",
          marginTop: 5,
          borderRadius: 5,
        }}
        image="/public/8.jpg"
        alt="Gift card image"
      />

      <Box
        sx={{
          width: "50%",
          height: "100%",
          color: "rgb(42 46 50 / 88%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 4,
          position: "relative",
          fontFamily: "'Georgia', serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",

            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
            direction: "rtl",
            marginTop: 2,
          }}
        >
          <Typography fontWeight="bold" fontSize="35px">
            غازى
          </Typography>
          <Typography fontSize="30px">بطاقة هدايا</Typography>
        </Box>
        <Box sx={{ marginTop: 10, direction: "rtl" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", lineHeight: 1.1, marginBottom: 2 }}
          >
            اهداء هدية لا تنسى الى
            <br />
            من تحب من اختيارك
          </Typography>
          <Typography
            sx={{
              fontSize: 35,
              lineHeight: 1.5,
              color: "white",
              marginTop: 8,
            }}
          >
            لافتة ثمينة لأعز الاصدقاء
            <br /> تعكس ذوق صاحبها{" "}
          </Typography>

          <Typography
            component="a"
            href="#"
            sx={{
              color: "whitesmoke",
              fontSize: 25,
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
              display: "block",

              width: "fit-content",
              "&:after": {
                content: '" ↗"',
              },
            }}
          >
            اقرا المزيد{" "}
          </Typography>
        </Box>
        <Box />
      </Box>
    </Card>
  );
}

export default GiftCard;
