import React from "react"
import ReviewCard from "./ReviewCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
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

  return (
    <div style={main}>
      <h2 style={{ textAlign: "center" }}>A Collection of Reviews</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={0} // Set to 0 for continuous movement
        customTransition="transform 3000ms linear" // Smooth, continuous transition
        transitionDuration={3000}
        pauseOnHover={false} // Ensure it doesn't pause on hover
        slidesToSlide={1} // Number of slides to move per transition
        centerMode={false}
        shouldResetAutoplay={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        swipeable={false}
        draggable={false}
        arrows={false}
        keyBoardControl={false}
        additionalTransfrom={0}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
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
          )
        })}
      </Carousel>
      ;
    </div>
  )
}

export default ReviewSection
