import { useState, useEffect } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroMediaImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg|mp4|webm)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.values(heroMediaImports).length);
    }, 8000); // Adjust the duration here (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Object.values(heroMediaImports).length) % Object.values(heroMediaImports).length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.values(heroMediaImports).length);
  };

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={currentIndex}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={() => {
              handlePrevClick();
              onClickHandler();
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={() => {
              handleNextClick();
              onClickHandler();
            }}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {Object.values(heroMediaImports).map((media, index) => (
          <Box key={`carousel-media-${index}`}>
            {media.endsWith(".mp4") || media.endsWith(".webm") ? (
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
              >
                <source src={media} type={`video/${media.endsWith(".mp4") ? "mp4" : "webm"}`} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media}
                alt={`carousel-${index}`}
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100px", // Adjust height as needed
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              backgroundColor="rgb(0, 0, 0, 0.4)"
              position="absolute"
              top="46%"
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              {/* <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
              <Typography variant="h1">Summer Sale</Typography>
              <Typography
                fontWeight="bold"
                color={shades.secondary[300]}
                sx={{ textDecoration: "underline" }}
              >
                Discover More
              </Typography> */}
            </Box>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
