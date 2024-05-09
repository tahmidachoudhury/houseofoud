import React from 'react';
import ReviewCard from './ReviewCard';
import reviews from '../../../data';
import Carousel from 'react-material-ui-carousel'
import "./ReviewSection.css"

function ReviewSection(){

  return (

  <div className="main" style={{padding: "48px 0"}}>

    <h2 style={{textAlign: "center"}}>A Collection of Reviews</h2>{/* title */}

    <Carousel animation="slide" duration="800" autoPlay={false}>
      {reviews.map((review, index) => {
          return <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <ReviewCard 
            key={index}
            stars={review.stars}
            subject={review.subject}
            content={review.content}
            name={review.name}
            />
            <ReviewCard 
            key={index}
            stars={review.stars}
            subject={review.subject}
            content={review.content}
            name={review.name}
            />
            <ReviewCard 
            key={index}
            stars={review.stars}
            subject={review.subject}
            content={review.content}
            name={review.name}
            />
          </div>
        })}
    </Carousel>

  </div>
  )
}


export default ReviewSection;