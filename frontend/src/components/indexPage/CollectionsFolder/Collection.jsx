import React, { useState } from "react";


function Collection(props){

  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    width: 'auto',
    height: '600px',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '1.2s',
  };

  const image = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '0.7s',
    width: 'auto',
    height: '600px',
  }

  const text = {
    textAlign: 'center',
    fontSize: '2rem',
  }

  const imgContainer = {
    overflow: 'hidden',
  }

  if (isHovered){
    image.transform = 'scale(1.05)';
  }

  return (

    <div >

      <div 
        style={imgContainer} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
      >
        <div style={{...containerStyle, ...image}}></div>
      </div>
      
      <div style={text}>
        {props.text}
      </div>

    </div>
  )
}

export default Collection;