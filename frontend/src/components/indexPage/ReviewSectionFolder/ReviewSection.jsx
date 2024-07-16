import React from "react"
import ReviewCard from "./ReviewCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState, useEffect } from "react"

function ReviewSection() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiUrl = import.meta.env.VITE_API_URL
      try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }

  const main = {
    padding: "48px 0",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/brushed-alum.png")',
    margin: "0",
  }

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div style={main}>
      <h2 style={{ textAlign: "center" }}>A Collection of Reviews</h2>
      <Slider {...settings}>
        {data.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              stars={review.stars}
              subject={review.subject}
              content={review.content}
              name={review.name}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default ReviewSection
