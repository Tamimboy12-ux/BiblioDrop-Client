"use client";

import { Elements,}from "@stripe/react-stripe-js";

import { stripePromise,}from "@/lib/stripe";

import CheckoutForm from "./CheckoutForm";

const CheckoutWrapper = ({ book }) => {

  return (
    <Elements
      stripe={stripePromise}
    >
      <CheckoutForm book={book}/>
      
    </Elements>
  );
};

export default
CheckoutWrapper;