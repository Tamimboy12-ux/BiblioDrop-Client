"use client";

import { useEffect, useState } from "react";

import { CardElement, useElements, useStripe,}from "@stripe/react-stripe-js";

import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import { createPaymentIntent, saveTransaction,}from "@/services/paymentApi";
import { createDelivery } from "@/services/deliveryApi";
import toast from "react-hot-toast";

const CheckoutForm = ({ book }) => {
  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const { data: session } = useSession();

  const [clientSecret, setClientSecret] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
        const data = await createPaymentIntent(Number(book.deliveryFee));

        setClientSecret(data.clientSecret);
      };

    getClientSecret();
  }, [book]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (
        !stripe ||
        !elements
      ) {
        return;
      }

      setLoading(true);
      setMessage("");

      const card = elements.getElement(CardElement);

      if (!card) {
        setLoading(false);
        return;
      }

      const { error, paymentMethod,}= await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (error) {
        setMessage(
          error.message
        );
        setLoading(false);
        return;
      }

      const result = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: paymentMethod.id,
          }
        );

      if (result.error) {
        setMessage(
          result.error.message
        );
        setLoading(false);

        return;
      }

      if (
        result.paymentIntent?.status === "succeeded"){
        try {

          await createDelivery({
            userName: session?.user?.name,

            userEmail: session?.user?.email,

            bookId: book._id,

            bookTitle: book.title,

            librarianEmail: book.librarianEmail,

            deliveryFee: book.deliveryFee,

            paymentId: result.paymentIntent.id,
          });

          await saveTransaction({
            transactionId: result.paymentIntent.id,

            userEmail: session?.user?.email,

            librarianEmail: book.librarianEmail,

            amount:Number(book.deliveryFee),

            date: new Date(),
          });

          toast.success("Payment Successful");

          router.push(
            "/dashboard/user"
          );

        } catch (err) {
          console.log(err);
        }
      }

      setLoading(false);
    };

  return (
    <div className=" max-w-2xl mx-auto py-10 ">
        <div className=" bg-white rounded-3xl border shadow-sm p-8 ">
        <h1
          className="text-3xl font-bold mb-2">
          Checkout
        </h1>

        <p
          className="  text-gray-500  mb-6  ">
          {book.title}
        </p>

        <div
          className="  mb-6  text-lg  font-semibold  ">
          Delivery Fee:
          $
          {book.deliveryFee}
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className="  border  rounded-2xl  p-4  mb-5  ">
            <CardElement />
          </div>

          <button
            type="submit"
            disabled={
              !stripe ||
              !clientSecret ||
              loading
            }
            className="  w-full  bg-indigo-600  text-white  py-3  rounded-2xl  font-semibold  ">
            {loading
              ? "Processing..."
              : `Pay ${book.deliveryFee}`}
          </button>
        </form>

        {message && (
          <p
            className="  mt-4  text-red-500  ">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;