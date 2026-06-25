"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getMyBooks,
  deleteBook,
  updateBookStatus,
} from "@/services/booksApi";

import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const InventoryPage = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async () => {
    try {
      const data = await getMyBooks(
        session?.user?.email
      );

      setBooks(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      loadBooks();
    }
  }, [session]);

  const handleDelete = async (id) => {

    await deleteBook(id);

    loadBooks();
    toast.success("Delete Successful")
  };

  const handleUnpublish = async (id) => {
    await updateBookStatus(
      id,
      "Unpublished"
    );

    loadBooks();
    toast.success("Book Unpublished Successful")
  };

  return (
    <div className="space-y-8">


      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Manage Inventory
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all your uploaded books
          </p>

        </div>

        <div
          className="
          bg-white
          border
          rounded-2xl
          px-6
          py-4
          shadow-sm
          "
        >
          <p className="text-sm text-slate-500">
            Total Books
          </p>

          <h3 className="text-3xl font-bold text-indigo-600">
            {books.length}
          </h3>
        </div>

      </div>


      {loading && (
        <div className="bg-white rounded-3xl border p-10 text-center">
          Loading books...
        </div>
      )}


      {!loading && books.length === 0 && (
        <div
          className="
          bg-white
          rounded-3xl
          border
          p-12
          text-center
          "
        >
          <h2 className="text-2xl font-semibold">
            No Books Found
          </h2>

          <p className="text-slate-500 mt-2">
            Add your first book to get started.
          </p>
        </div>
      )}


      {!loading && books.length > 0 && (
        <div
          className="
          bg-white
          rounded-3xl
          border
          shadow-sm
          overflow-hidden
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Title
                  </th>

                  <th className="px-6 py-4 text-left">
                    Author
                  </th>

                  <th className="px-6 py-4 text-left">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left">
                    Fee
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {books.map((book) => (

                  <tr
                    key={book._id}
                    className="
                    border-t
                    hover:bg-slate-50
                    transition
                    "
                  >

                    <td className="px-6 py-5 font-semibold">
                      {book.title}
                    </td>

                    <td className="px-6 py-5">
                      {book.author}
                    </td>

                    <td className="px-6 py-5">
                      {book.category}
                    </td>

                    <td className="px-6 py-5 font-medium text-indigo-600">
                      ৳ {book.deliveryFee}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          book.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : book.status === "Pending Approval"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                        `}
                      >
                        {book.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center flex-wrap gap-2">

                        <button
                          onClick={() =>
                            router.push(
                              `/dashboard/librarian/edit-book/${book._id}`
                            )
                          }
                          className="
                          px-4
                          py-2
                          rounded-xl
                          bg-indigo-600
                          text-white
                          hover:bg-indigo-700
                          transition
                          "
                        >
                          Edit
                        </button>

                        {book.status ===
                          "Published" && (
                          <button
                            onClick={() =>
                              handleUnpublish(
                                book._id
                              )
                            }
                            className="
                            px-4
                            py-2
                            rounded-xl
                            bg-amber-500
                            text-white
                            hover:bg-amber-600
                            transition
                            "
                          >
                            Unpublish
                          </button>
                        )}

                        <button
                          onClick={() =>
                            handleDelete(
                              book._id
                            )
                          }
                          className="
                          px-4
                          py-2
                          rounded-xl
                          bg-red-500
                          text-white
                          hover:bg-red-600
                          transition
                          "
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

    </div>
  );
};

export default InventoryPage;