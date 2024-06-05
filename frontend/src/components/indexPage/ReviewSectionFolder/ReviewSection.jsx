import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../../../data/allItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

function ReviewSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log("API URL:", apiUrl); // Logging the API URL
      try {
        const response = await fetch(apiUrl);
        console.log("Response Status:", response.status); // Logging response status

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const result = await response.json();
        console.log("Fetched Data:", result); // Logging the result
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const main = {
    padding: "48px 0",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/brushed-alum.png")',
    margin: "0",
  };

  return (
    <div style={main}>
      <h2 style={{ textAlign: "center" }}>A Collection of Reviews</h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
      >
        {data.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              stars={review.stars}
              subject={review.subject}
              content={review.content}
              name={review.name}
            />
          );
        })}
      </Carousel>
      ;
    </div>
  );
}

export default ReviewSection;
