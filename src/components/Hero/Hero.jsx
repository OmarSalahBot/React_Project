import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from '@emotion/react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Hero.css";
const sliderInfo = [
  {text:"MEN" ,link:"src/Images/banner-15.jpg",sale:"30%"},
  {text:"WOMEN" ,link:"src/Images/banner-25.jpg",sale:"35%"}
]

// import required modules
import { Pagination } from "swiper/modules";
const Hero = () => {
  const theme = useTheme();
  const Computer = useMediaQuery('(min-width:900px)');
  return (
    <div style={{ backgroundColor: `${theme.
// @ts-ignore
    palette.BackGroundColor.main}`, margin: "30px 0px" }}>
      <Container
        sx={{
          display: "flex",
          gap: "10px",
          padding: "25px 0px",
          position: "relative",
        }}
      >
        <Swiper loop={true} pagination={true} modules={[Pagination]} className="mySwiper">
          {sliderInfo.map((item)=>{
            return(
              <SwiperSlide key={item.link}>
            <img src={item.link} alt="" />
            <Typography
              sx={{
                position: "absolute",
                top: "15%",
                left: "7%",
                zIndex: "1",
              }}
            >
              <p
                style={{
                  fontSize: "30px",
                  color: "#4b4b4bfd",
                  pointerEvents: "none",
                  textAlign: "start",
                }}
              >
                LIFESTYLE COLLECTION
              </p>
              <p
                style={{
                  fontSize: "60px",
                  color: "#202020fd",
                  pointerEvents: "none",
                  textAlign: "start",
                  fontWeight: "bold",
                  marginTop: "-10px",
                }}
              >
                {item.text}
              </p>
              <p
                style={{
                  textAlign: "start",
                  fontSize: "30px",
                  fontWeight: "500",
                  color:"#202020fd"
                }}
              >
                SALE UP TO <span style={{ color: "#c00000b7" }}>{item.sale} OFF</span>
              </p>
              <p style={{ textAlign: "start" ,color:"#202020fd" }}>
                Get Free Shipping on orders over $99.00
              </p>
              <Link
                className="d-flex"
                to={"/google"}
                style={{
                  marginTop: "40px",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  backgroundColor: "#181818",
                  padding: "12px 15px",
                  width: "100px",
                }}
              >
                Shop Now
              </Link>
            </Typography>
          </SwiperSlide>
            );
          })}
        </Swiper>
        {Computer&&(<div
          className="PC-Shoes"
          style={{ minWidth: "26.9%", display: "flex", flexDirection: "column",justifyContent:"space-between" }}
        >
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/Images/banner-17.jpg" alt="" />
            <Typography sx={{ position: "absolute", top: "18%", left: "10%" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  pointerEvents: "none",
                }}
              >
                NEW ARRIVALS
              </p>
              <h1
                style={{
                  fontSize: "20px",
                  color: "black",
                  pointerEvents: "none",
                }}
              >
                SUMMER <br />
                SALE 20% OFF
              </h1>
              <Link
                className="d-flex"
                to={"/google"}
                style={{
                  marginTop: "20px",
                  fontSize: "13px",
                  color: "black",
                  fontWeight: "bold",
                  justifyContent: "start",
                }}
              >
                Shop Now
                <ArrowForwardIcon
                  sx={{ marginLeft: "10px", fontSize: "15px" }}
                />
              </Link>
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/Images/banner-16.jpg" alt="" />
            <Typography sx={{ position: "absolute", top: "18%", left: "10%" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  pointerEvents: "none",
                }}
              >
                GAMING 4K
              </p>
              <h1
                style={{
                  fontSize: "20px",
                  color: "black",
                  pointerEvents: "none",
                }}
              >
                DESKTOPS & <br />
                LAPTOPS
              </h1>
              <Link
                className="d-flex"
                to={"/google"}
                style={{
                  marginTop: "20px",
                  fontSize: "13px",
                  color: "black",
                  fontWeight: "bold",
                  justifyContent: "start",
                }}
              >
                Shop Now
                <ArrowForwardIcon
                  sx={{ marginLeft: "10px", fontSize: "15px" }}
                />
              </Link>
            </Typography>
          </Box>
        </div>)}
      </Container>
    </div>
  );
};

export default Hero;
