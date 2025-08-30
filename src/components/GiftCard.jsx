"use client"

import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"


function GiftCard() {


  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: { xs: "auto", md: "90vh" },
        boxShadow: "none",
        borderRadius: 0,
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
     
      }}
      
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: "60%" },
          objectFit: "cover",
          height: { xs: "250px", sm: "350px", md: "90%" },
          marginTop: { xs: 1, sm: 2, md: 5 },
          borderRadius: { xs: 2, md: 5 },
          mx: { xs: 2, md: 0 },
        
        }}
        image="/8.jpg"
        alt="Gift card image"
      />

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          color: "rgb(42 46 50 / 88%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: { xs: 3, sm: 4, md: 5 },
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
            marginTop: { xs: 1, md: 2 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            gap: { xs: 1, sm: 0 },
            textAlign: { xs: "center", sm: "inherit" },
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: { xs: "20px", sm: "26px", md: "35px" } }}>
            غازى
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", sm: "22px", md: "30px" } }}>بطاقة هدايا</Typography>
        </Box>

        <Box
          sx={{
            marginTop: { xs: 3, sm: 4, md: 8 },
            direction: "rtl",
            textAlign: { xs: "center", sm: "right" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: { xs: 2, md: 3 },
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.5rem", lg: "3rem" },
             
            }}
          >
            اهداء هدية لا تنسى الى
            <br />
            من تحب من اختيارك
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "18px", md: "24px", lg: "28px" },
              lineHeight: 1.5,
              color: "white",
              marginTop: { xs: 2, sm: 3, md: 6 },
              px: { xs: 1, sm: 0 },
              mb: { xs: 3, sm: 4 },
            }}
          >
            لافتة ثمينة لأعز الاصدقاء
            <br /> تعكس ذوق صاحبها{" "}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: { xs: "center", sm: "flex-start" },
              mt: { xs: 3, sm: 4 },
            }}
          >
           

            <Typography
              component="a"
              href="#"
              sx={{
                color: "whitesmoke",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
                display: "inline-block",
                padding: { xs: "8px 0", sm: "4px 0" },
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "#1976d2",
                },
                "&:after": {
                  content: '" ↗"',
                },
              }}
            >
              اقرا المزيد{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default GiftCard
