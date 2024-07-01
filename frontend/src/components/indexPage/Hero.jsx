import React from "react"

function Hero() {
  const heroStyle = {
    margin: "0 auto",
    textAlign: "center",
    margin: "0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    backgroundColor: "#575756",
    backgroundSize: "cover",
    backgroundImage: `url(
          "https://fastly.picsum.photos/id/185/3995/2662.jpg?hmac=gXqQYKLwRcZNsxrWGW6YosAXEIU6-D7UbytF_ApGmDs"
        )`,
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
