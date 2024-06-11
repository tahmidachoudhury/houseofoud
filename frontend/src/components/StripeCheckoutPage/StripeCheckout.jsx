import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(
  "pk_test_51POxdB00JqWikrEqPjph3PxXv0SKuSftj4sbGbMKCzjU39gQhZgvO7gQrPAauK4dcEseHbWwvYo6sAvQWJjCeaBw00voB9blUg"
)

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (!error) {
      const response = await fetch("/create-checkout-session/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      })

      const session = await response.json()

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        console.error(result.error.message)
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>hello</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  )
}

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeCheckout
