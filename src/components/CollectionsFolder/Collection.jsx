import React from "react";
import "./Collections.css"

function Collection(props){

  const containerStyle = {
    width: 'auto',
    height: '600px',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (

    <div className="container">

      <div style={containerStyle}></div>

      <div className="text">
        {props.text}
      </div>

    </div>
  )
}

export default Collection;