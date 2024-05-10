import React from "react";
import "./Collections.css"

function Collection(props){

  const containerStyle = {
    width: 'auto',
    height: '600px',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '1.2s',
  };

  return (

    <div className="container">

      <div className="img-container">
        <div className="image" style={containerStyle}></div>
      </div>
      
      <div className="text">
        {props.text}
      </div>

    </div>
  )
}

export default Collection;