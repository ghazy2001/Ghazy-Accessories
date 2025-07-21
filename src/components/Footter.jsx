import {
  Card,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  Box,
  Link,
} from "@mui/material";

const textColor = "rgb(42 46 50 / 88%)";

const Footter = () => {
  return (
    <Card
      sx={{
        color: textColor,
        padding: 6,
        borderRadius: 0,
        boxShadow: "none",

        direction: "rtl",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: 200,
              lineHeight: 1,
            }}
          >
            غازى
          </Typography>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ maxWidth: 500, marginRight: 30, marginTop: 5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "medium", fontSize: 60 }}
            >
              رسآلة الجديدة
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: 30 }}>
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
                width: 600,
              }}
            >
              <TextField
                variant="standard"
                placeholder="ادخل اسم الحساب"
                InputProps={{
                  disableUnderline: false,
                  sx: { color: textColor, fontSize: 30 },
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
                }}
              >
                <FormControlLabel
                  control={<Checkbox sx={{ color: textColor }} />}
                  label={
                    <Typography sx={{ color: textColor, fontSize: 20 }}>
                      البقاء قيد تسجيل الدخول
                    </Typography>
                  }
                />
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: 20,
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

      <Grid container spacing={20} sx={{ mt: 8 }}>
        <Grid item xs={6} sm={3} md={2}>
          <Typography sx={{ mb: 2, fontSize: 20 }}>التواصل</Typography>
          <Typography sx={{ fontSize: 15 }}>
            mahmoudghazy2001@gmail.com
          </Typography>
          <Typography sx={{ fontSize: 20 }}>01003485691</Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography sx={{ mb: 1, fontSize: 20 }}>العنوان</Typography>
          <Typography sx={{ fontSize: 15 }}>
            محافظة الغربية المحلة الكبرى
          </Typography>
          <Typography sx={{ fontSize: 12 }}>ميدان الزراعة</Typography>
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
        <Link
          href="https://www.wix.com"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: textColor }}
        >
          GhaZY{" "}
        </Link>
      </Box>
    </Card>
  );
};

export default Footter;
