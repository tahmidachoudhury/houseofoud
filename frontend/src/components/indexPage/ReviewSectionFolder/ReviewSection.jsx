import React from 'react';
import ReviewCard from './ReviewCard';
import reviews from '../../data.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 

function ReviewSection(){

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const main = {
    padding: "48px 0",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/brushed-alum.png")',
    margin: '0',
  }

  return (

  <div style={main}>

    <h2 style={{textAlign: "center"}}>A Collection of Reviews</h2>

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
    
    {reviews.map((review, index) => {
      return <ReviewCard 
      key={index}
      stars={review.stars}
      subject={review.subject}
      content={review.content}
      name={review.name}
      />
    })}

  </Carousel>;

  </div>
  )
}


export default ReviewSection;