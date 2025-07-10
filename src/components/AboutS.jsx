import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AboutS() {
  return (
    <Card
      sx={{
        minWidth: 780,
        minHeight: "120vh",
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        position: "relative",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      <CardContent sx={{ position: "relative", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 6,
            fontWeight: "bold",
            fontSize: 40,
            color: "#5a5a5a",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Box>
            <div>حول</div>
            <div>غازى</div>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <div>ثقة </div>
            <div>خالدة</div>
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: 130,
            color: "#5a5a5a",
            textAlign: "left",
            lineHeight: 1.2,
            mb: 8,
            fontWeight: 500,
            marginLeft: 25,
            direction: "rtl",
          }}
        >
          "الجمال فى العيوب يكشف قصة الفن و الحرفية . "{" "}
        </Typography>

        <Typography
          sx={{
            color: "whitesmoke",
            fontSize: 40,
            maxWidth: 700,
            marginLeft: "auto",
            textAlign: "right",
            lineHeight: 1.5,
            mb: 2,
            fontFamily: "Arial, sans-serif",
            marginRight: 30,
          }}
        >
          يتوفر لدينا جميع اكسسوارات المطابخ الحديثة و الدريسنج رووم و الموبيليا
          .. يوجد لدينا جميع ما تحتاجه لتنفيذ تصميمك الخيالى و الابداع . لدينا
          اجود الانواع و الخامات و احدث الاصناف و الميكانيزمات فقط قم باختيار ما
          يناسبك و يناسب استخدامك . جميع منتجاتنا عليها ضمان لمدة عام
        </Typography>

        <Typography
          component="a"
          href="#"
          sx={{
            color: "whitesmoke",
            fontSize: 30,
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            width: "fit-content",
            "&:after": {
              content: '" ↗"',
              marginRight: 28,
            },
          }}
        >
          اقرا المزيد{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutS;
