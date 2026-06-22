"use client";

import {
  createDelivery,
} from "@/services/deliveryApi";

import { useSession,}from "@/lib/auth-client";
import Link from "next/link";

const BookDetailsClient = ({ book }) => {

  const {data: session} = useSession();

  const handleRequest =
    async () => {

      const delivery = {

        userName:
          session.user.name,

        userEmail:
          session.user.email,

        bookId:
          book._id,

        bookTitle:
          book.title,

        librarianEmail:
          book.librarianEmail,

        deliveryFee:
          book.deliveryFee,
      };

      await createDelivery(delivery);

      alert(
        "Delivery Requested"
      );
    };

  return (

    <div
      className="
      max-w-5xl
      mx-auto
      py-10
      "
    >

      <img
        src={book.image}
        alt=""
        className="
        w-full
        h-[500px]
        object-cover
        rounded-3xl
        "
      />

      <h1
        className="
        text-5xl
        font-bold
        mt-8
        "
      >
        {book.title}
      </h1>

      <p className="mt-4">
        {book.description}
      </p>

      <Link
        href={`/books/${book._id}/checkout`}
        className=" inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl "
      >
        Proceed To Payment
      </Link>

    </div>
  );
};

export default BookDetailsClient;