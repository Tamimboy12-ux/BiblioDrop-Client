"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {getPublishedBooks,} from "@/services/booksApi";



const BooksPage = () => {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] =useState(1);

    const [filters, setFilters] = useState({
      search: "",
      category: "",
      minFee: "",
      maxFee: "",
    });

    useEffect(() => {
      const loadBooks = async () => {
          const data = await getPublishedBooks({
              page,
              ...filters,
            });
          
          setBooks(data.books || []);
          setTotalPages(data.totalPages || 1);
        };
      
      loadBooks();
    }, [page, filters]);

    const handleChange = (e) => {
      setPage(1);
      setFilters({
        ...filters,
        [e.target.name]:e.target.value,
      });
    };



  return (

  <div className="max-w-7xl mx-auto py-10 px-4 mt-15">

  <h1 className="text-4xl font-bold mb-8">
    Browse Books
  </h1>

  <div
    className="
    grid md:grid-cols-4
    gap-4 mb-8
    "
  >

    <input
      name="search"
      placeholder="Search Book"
      value={filters.search}
      onChange={handleChange}
      className="border p-3 rounded-xl"
    />

    <input
      name="category"
      placeholder="Category"
      value={filters.category}
      onChange={handleChange}
      className="border p-3 rounded-xl"
    />

    <input
      type="number"
      name="minFee"
      placeholder="Min Fee"
      value={filters.minFee}
      onChange={handleChange}
      className="border p-3 rounded-xl"
    />

    <input
      type="number"
      name="maxFee"
      placeholder="Max Fee"
      value={filters.maxFee}
      onChange={handleChange}
      className="border p-3 rounded-xl"
    />

  </div>

  <div className=" grid md:grid-cols-3 gap-6 ">
    {
      books.map(book => (

        <div
          key={book._id}
          className="
          bg-white
          border
          rounded-3xl
          overflow-hidden
          "
        >

          <Image
            src={book.image}
            alt={book.title}
            width={600}
            height={400}
            className="
            w-full
            h-64
            object-cover
            "
          />

          <div className="p-5">

            <h2 className="font-bold text-xl">
              {book.title}
            </h2>

            <p className="text-gray-500">
              {book.author}
            </p>

            <p className="mt-2">
              ${book.deliveryFee}
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

      ))
    }

  </div>

  <div className=" flex justify-center gap-2 mt-10 ">

    <button
      disabled={page === 1}
      onClick={() =>
        setPage(page - 1)
      }
      className=" border px-4 py-2 rounded-xl ">
      Prev
    </button>

    {
      [...Array(totalPages)]
        .map((_, i) => (

          <button
            key={i}
            onClick={() =>
              setPage(i + 1)
            }
            className={`
              px-4 py-2 rounded-xl
              ${
                page === i + 1
                  ? "bg-indigo-600 text-white"
                  : "border"
              }
            `}
          >
            {i + 1}
          </button>

        ))
    }

    <button
      disabled={
        page === totalPages
      }
      onClick={() =>
        setPage(page + 1)
      }
      className="border px-4 py-2 rounded-xl ">
      Next
    </button>

  </div>

</div>

);
};

export default BooksPage;
