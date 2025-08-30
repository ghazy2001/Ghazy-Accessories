import { Card, Typography, TextField, Checkbox, Button, FormControlLabel, Grid, Box, Link } from "@mui/material"

const textColor = "rgb(42 46 50 / 88%)"

const Footter = () => {
  return (
    <Card
      sx={{
        color: textColor,
        padding: { xs: 3, sm: 4, md: 6 },
        borderRadius: 0,
        boxShadow: "none",
        direction: "rtl",
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: { xs: "60px", sm: "100px", md: "150px", lg: "200px" },
              lineHeight: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            غازى
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box
            sx={{
              maxWidth: 500,
              marginRight: { xs: 0, md: 30 },
              marginTop: { xs: 2, md: 5 },
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "medium",
                fontSize: { xs: "32px", sm: "40px", md: "60px" },
              }}
            >
              رسآلة الجديدة
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
              }}
            >
              سجل الان لتحصل على اخر الاصدارات <br />و العروض .
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: { xs: "100%", sm: "400px", md: "600px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <TextField
                variant="standard"
                placeholder="ادخل اسم الحساب"
                InputProps={{
                  disableUnderline: false,
                  sx: {
                    color: textColor,
                    fontSize: { xs: "20px", sm: "24px", md: "30px" },
                  },
                }}
                sx={{
                  input: { color: textColor },
                  borderBottom: `1px solid ${textColor}`,
                }}
                fullWidth
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 0 },
                }}
              >
                <FormControlLabel
                  control={<Checkbox sx={{ color: textColor }} />}
                  label={
                    <Typography
                      sx={{
                        color: textColor,
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      }}
                    >
                      البقاء قيد تسجيل الدخول
                    </Typography>
                  }
                />
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    borderColor: textColor,
                    color: textColor,
                    textTransform: "uppercase",
                    fontWeight: "medium",
                    "&:hover": {
                      borderColor: textColor,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  التسجيل{" "}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 4, md: 20 }} sx={{ mt: { xs: 4, md: 8 } }}>
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            sx={{
              mb: 2,
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            التواصل
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "15px" },
            }}
          >
            mahmoudghazy2001@gmail.com
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            01003485691
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            sx={{
              mb: 1,
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            العنوان
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "15px" },
            }}
          >
            محافظة الغربية المحلة الكبرى
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "11px", md: "12px" },
            }}
          >
            ميدان الزراعة
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography sx={{ mb: 1 }}>القائمة</Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              المنزل
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              تسوق
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              حول
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              بطاقات الهدايا{" "}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography sx={{ mb: 1 }}>تابعنا</Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              Instagram
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              Facebook
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="hover" sx={{ color: textColor }}>
              Pinterest
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, fontSize: "0.8rem", color: textColor, opacity: 0.7 }}>
        © built by Mahmoud GhaZy 2025
        <Link href="https://www.wix.com" target="_blank" rel="noopener" underline="hover" sx={{ color: textColor }}>
          GhaZY{" "}
        </Link>
      </Box>
    </Card>
  )
}

export default Footter
