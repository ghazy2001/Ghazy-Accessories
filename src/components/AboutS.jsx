"use client"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { useState } from "react"

function AboutS() {
  const [showMore, setShowMore] = useState(false)

  return (
    <Card
      sx={{
        width: "100%",
        minHeight: { xs: "auto", sm: "70vh", md: "90vh" },
        background: "linear-gradient(to bottom, white, rgb(42 46 50 / 88%))",
        position: "relative",
        padding: { xs: 2, sm: 3, md: 4 },
        boxSizing: "border-box",
      }}
    >
      <CardContent sx={{ position: "relative", height: "100%", p: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: { xs: 3, sm: 4, md: 6 },
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "32px", lg: "40px" },
            color: "#5a5a5a",
            fontFamily: "Arial, sans-serif",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            textAlign: { xs: "center", sm: "inherit" },
          }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <div>حول</div>
            <div>غازى</div>
          </Box>
          <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <div>ثقة </div>
            <div>خالدة</div>
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Times New Roman', serif",
            fontSize: { xs: "1.5rem", sm: "2.25rem", md: "3.5rem", lg: "5rem" },
            color: "#5a5a5a",
            textAlign: { xs: "center", md: "left" },
            lineHeight: 1.3,
            mb: { xs: 3, sm: 4, md: 6 },
            fontWeight: 500,
            marginLeft: { xs: 0, sm: 2, md: 4, lg: 8 },
            direction: "rtl",
            px: { xs: 1, sm: 0 },
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#1976d2",
            },
          }}
        >
          "الجمال فى العيوب يكشف قصة الفن و الحرفية . "{" "}
        </Typography>

        <Typography
          sx={{
            color: "whitesmoke",
            fontSize: { xs: "14px", sm: "18px", md: "24px", lg: "32px" },
            maxWidth: { xs: "100%", md: "80%", lg: "70%" },
            marginLeft: "auto",
            textAlign: "right",
            lineHeight: 1.6,
            mb: { xs: 2, sm: 3, md: 4 },
            fontFamily: "Arial, sans-serif",
            marginRight: { xs: 0, sm: 2, md: 4, lg: 8 },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          يتوفر لدينا جميع اكسسوارات المطابخ الحديثة و الدريسنج رووم و الموبيليا .. يوجد لدينا جميع ما تحتاجه لتنفيذ
          تصميمك الخيالى و الابداع . لدينا اجود الانواع و الخامات و احدث الاصناف و الميكانيزمات فقط قم باختيار ما يناسبك
          و يناسب استخدامك . جميع منتجاتنا عليها ضمان لمدة عام
        </Typography>

        {showMore && (
          <Box
            sx={{
              mt: { xs: 3, sm: 4 },
              p: { xs: 2, sm: 3 },
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 2,
              marginRight: { xs: 0, sm: 2, md: 4, lg: 8 },
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <Typography
              sx={{
                color: "whitesmoke",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                textAlign: "right",
                lineHeight: 1.6,
                mb: 2,
                direction: "rtl",
              }}
            >
              خدماتنا تشمل:
            </Typography>
            <Box
              component="ul"
              sx={{
                color: "whitesmoke",
                fontSize: { xs: "11px", sm: "14px", md: "18px" },
                textAlign: "right",
                direction: "rtl",
                listStyle: "none",
                p: 0,
              }}
            >
              <li>• تصميم وتنفيذ المطابخ الحديثة</li>
              <li>• غرف الملابس والدريسنج روم</li>
              <li>• الموبيليا المخصصة</li>
              <li>• استشارات التصميم الداخلي</li>
              <li>• خدمة ما بعد البيع</li>
            </Box>
          </Box>
        )}

        <Divider
          sx={{
            bgcolor: "whitesmoke",
            opacity: 0.3,
            my: { xs: 2, sm: 3 },
            marginRight: { xs: 0, sm: 2, md: 4, lg: 8 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: { xs: "center", sm: "flex-end" },
            justifyContent: "flex-end",
            marginRight: { xs: 0, sm: 2, md: 4, lg: 8 },
          }}
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outlined"
            sx={{
              color: "whitesmoke",
              borderColor: "whitesmoke",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "#1976d2",
                color: "#1976d2",
              },
            }}
          >
            {showMore ? "اخفاء التفاصيل" : "المزيد من التفاصيل"}
          </Button>

          <Typography
            component="a"
            href="#"
            sx={{
              color: "whitesmoke",
              fontSize: { xs: "14px", sm: "18px", md: "24px" },
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
              direction: "rtl",
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
      </CardContent>
    </Card>
  )
}

export default AboutS
