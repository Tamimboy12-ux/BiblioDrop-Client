"use client";

import { useEffect, useState,}from "react";

import { useSession,}from "@/lib/auth-client";
import { getReadingList,}from "@/services/readingApi";

const ReadingListPage = () => {

    const { data: session,}= useSession();

    const [books, setBooks] = useState([]);

    useEffect(() => {
      if (session?.user?.email) {

        getReadingList(
          session?.user?.email
        ).then(
          setBooks
        );
      }

    }, [session]);

    return (

      <div>
        <h1
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          My Reading List
        </h1>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          {
            books.map((item) => (
                <div
                  key={item._id}
                  className="
                  bg-white
                  rounded-3xl
                  border
                  p-6
                  "
                >

                  <h3
                    className="
                    text-xl
                    font-semibold
                    "
                  >
                    {
                      item.bookTitle
                    }
                  </h3>

                  <p
                    className="
                    text-sm
                    text-gray-500
                    mt-2
                    "
                  >
                    Delivered
                  </p>

                </div>

              )
            )
          }

        </div>

      </div>
    );
};

export default ReadingListPage;