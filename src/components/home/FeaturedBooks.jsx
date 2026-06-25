"use client";

import { useEffect, useState } from "react";
import { getFeaturedBooks } from "@/services/booksApi";
import Image from "next/image";
import Link from "next/link";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await getFeaturedBooks();
      setBooks(data);
    };

    loadBooks();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8">
        Featured Books
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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
              className="w-full h-64 object-cover"
            />

            <div className="p-5">

              <h3 className="font-bold text-xl">
                {book.title}
              </h3>

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
    </section>
  );
};

export default FeaturedBooks;