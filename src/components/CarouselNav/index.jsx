import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Container } from "./styles";

export function CarouselNav({ children }) {
  let carouselRef = null;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1301 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 900, min: 100 },
      items: 1,
    },
  };
  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="custom-button-group">
        <div className="wrapper_button back">
          <button onClick={previous}>
            <MdArrowBackIosNew />
          </button>
        </div>
        <div className="wrapper_button forward">
          <button onClick={next}>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div
        className="wrapper_plates"
        id={`${children.length < 4 ? "addMargin" : ""}`}
      >
        <Carousel
          responsive={responsive}
          centerMode={true}
          draggable
          transitionDuration={700}
          customButtonGroup={
            <CustomButtonGroup
              previous={() => carouselRef.previous()}
              next={() => carouselRef.next()}
            />
          }
          containerClass="carousel-container"
          itemClass="carousel-item"
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "superLargeDesktop",
            "desktop",
          ]}
          dotListClass="custom-dot-list-style"
          ref={(ref) => (carouselRef = ref)}
          keyBoardControl
        >
          {children}
        </Carousel>
        <div className="wrapper_button back">
          <button onClick={() => carouselRef.previous()}>
            <MdArrowBackIosNew />
          </button>
        </div>

        <div className="wrapper_button forward">
          <button onClick={() => carouselRef.next()}>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </Container>
  );
}
