import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51POxdB00JqWikrEqPjph3PxXv0SKuSftj4sbGbMKCzjU39gQhZgvO7gQrPAauK4dcEseHbWwvYo6sAvQWJjCeaBw00voB9blUg"
)

const CheckoutButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise

    console.log(stripe)

    const response = await fetch(
      "http://localhost:8000/create-checkout-session/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    const session = await response.json()

    if (session.url) {
      window.location.href = session.url
    } else {
      console.error(session.error)
    }
  }

  return <button onClick={handleClick}>Checkout</button>
}

export default CheckoutButton

// const stripePromise = loadStripe(
//   "pk_test_51POxdB00JqWikrEqPjph3PxXv0SKuSftj4sbGbMKCzjU39gQhZgvO7gQrPAauK4dcEseHbWwvYo6sAvQWJjCeaBw00voB9blUg"
// )
