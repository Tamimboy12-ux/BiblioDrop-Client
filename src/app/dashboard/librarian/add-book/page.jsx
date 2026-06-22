"use client";

import { addBook } from "@/services/booksApi";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AddBookPage = () => {

  const { data: session } = useSession();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const book = {
      title: form.title.value,
      author: form.author.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      deliveryFee: Number(form.deliveryFee.value),

      librarianEmail:
      session?.user?.email,
    };

    const result = await addBook(book);

    if (result.insertedId) {
      toast.success("Book Added");
      form.reset();
    }
  };

  return (
    <div className="max-w-4xl">

      <h1 className="text-3xl font-bold mb-6">
        Add Book
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          name="title"
          placeholder="Book Title"
          className="border p-3 w-full rounded-xl"
        />

        <input
          name="author"
          placeholder="Author"
          className="border p-3 w-full rounded-xl"
        />

        <input
          name="image"
          placeholder="Image URL"
          className="border p-3 w-full rounded-xl"
        />

        <input
          name="category"
          placeholder="Category"
          className="border p-3 w-full rounded-xl"
        />

        <input
          type="number"
          name="deliveryFee"
          placeholder="Delivery Fee"
          className="border p-3 w-full rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border p-3 w-full rounded-xl"
        />

        <button
          className="
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Add Book
        </button>

      </form>

    </div>
  );
};

export default AddBookPage;