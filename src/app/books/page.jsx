"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  getPublishedBooks,
} from "@/services/booksApi";
import Image from "next/image";

const BooksPage = () => {

  const [books, setBooks] =
    useState([]);

  useEffect(() => {

    const loadBooks =
      async () => {

        const data =
          await getPublishedBooks();

        setBooks(data);
      };

    loadBooks();

  }, []);

  return (

    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Browse Books
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >

        {books.map((book) => (

          <div
            key={book._id}
            className="
            bg-white
            border
            rounded-3xl
            overflow-hidden
            shadow-sm
            "
          >
            
            <Image 
              src={book.image}
              alt={book.title}
              width={600}
              height={400}
            />

            <div className="p-5">

              <h2 className="font-bold text-xl">
                {book.title}
              </h2>

              <p className="text-gray-500">
                {book.author}
              </p>

              <p className="mt-2">
                ৳{book.deliveryFee}
              </p>

              <Link
                href={`/books/${book._id}`}
                className="
                mt-4
                inline-block
                bg-indigo-600
                text-white
                px-5
                py-2
                rounded-xl
                "
              >
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default BooksPage;