import React from "react";

function Hero(){

    const heroStyle = {
      margin: '0 auto',
      textAlign: 'center',
      margin: '0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      backgroundColor: '#575756',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/brushed-alum.png")',
    }

    return (
        <div style={heroStyle}>
            <div>
                <h1>House of Oud</h1>
                <p>Amazing fragrances. Inspired by Arabian scents</p>                
            </div>
        </div>
        
    )
}

export default Hero