import React from "react";
import { Card } from "flowbite-react";
import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

export default function Carousel3() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgb(173, 170, 170)",
          borderRadius: "40px",
        }}
        onClick={onClick}
      />
    );
  }
  const data = [
    {
      image: "https://via.placeholder.com/150",
    },
    {
      image: "https://via.placeholder.com/150",
    },
    {
      image: "https://via.placeholder.com/150",
    },
    {
      image: "https://via.placeholder.com/150",
    },
    {
      image: "https://via.placeholder.com/150",
    },
    {
      image: "https://via.placeholder.com/150",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-14 ">
      
      <div className="w-5/6 m-auto">
        <Slider {...settings} className="m-4 ">
          {data.map((item, index) => (
            <div key={index} className="p-4 ">
              <Card
                className="max-w-sm shadow-white border-0 mx-auto rounded-lg"
                imgAlt={`Image of `}
                imgSrc={item.image}
              >
                
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
