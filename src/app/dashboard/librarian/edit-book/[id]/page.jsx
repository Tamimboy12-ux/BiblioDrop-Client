"use client";

import { useEffect, useState } from "react";

import { getBookById, updateBook,}from "@/services/booksApi";

import { useParams, useRouter,}from "next/navigation";
import toast from "react-hot-toast";
import { Spinner } from "@heroui/react";

const EditBookPage = () => {

  const { id } = useParams();

  const router = useRouter();

  const [book, setBook] =
    useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadBook = async () => {

      const data =
        await getBookById(id);

      setBook(data);

      setLoading(false);
    };

    loadBook();

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedBook = {

      title: form.title.value,

      author: form.author.value,

      image: form.image.value,

      category: form.category.value,

      deliveryFee: Number(
        form.deliveryFee.value
      ),

      description:
        form.description.value,

    };

    const result = await updateBook(id, updatedBook);

    if (result.modifiedCount > 0) {
      toast.success("Book Updated Successfully");
      router.push("/dashboard/librarian/inventory");
    }
  };

  if (loading) {
    return (
     <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
      </div>
    );
  }

  return (

    <div className="max-w-4xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Edit Book
        </h1>

        <p className="text-slate-500 mt-2">
          Update your book
          information
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="
        bg-white
        border
        rounded-3xl
        p-8
        shadow-sm
        "
      >

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              name="title"
              defaultValue={
                book.title
              }
              className="
              w-full
              border
              rounded-xl
              p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Author
            </label>

            <input
              name="author"
              defaultValue={
                book.author
              }
              className="
              w-full
              border
              rounded-xl
              p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              name="category"
              defaultValue={
                book.category
              }
              className="
              w-full
              border
              rounded-xl
              p-3
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Delivery Fee
            </label>

            <input
              type="number"
              name="deliveryFee"
              defaultValue={
                book.deliveryFee
              }
              className="
              w-full
              border
              rounded-xl
              p-3
              "
            />

          </div>

        </div>

        <div className="mt-5">

          <label className="block mb-2 font-medium">
            Image URL
          </label>

          <input
            name="image"
            defaultValue={
              book.image
            }
            className="
            w-full
            border
            rounded-xl
            p-3
            "
          />

        </div>

        <div className="mt-5">

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            name="description"
            defaultValue={
              book.description
            }
            rows={5}
            className="
            w-full
            border
            rounded-xl
            p-3
            "
          />

        </div>

        <button
          className="
          mt-6
          bg-indigo-600
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-indigo-700
          "
        >
          Update Book
        </button>

      </form>

    </div>

  );
};

export default EditBookPage;