"use client";

import { addBook } from "@/services/booksApi";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { uploadImage } from "@/services/imageUpload";
import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

const AddBookPage = () => {
const { data: session } = useSession();

const [image, setImage] = useState(null);

const handleSubmit = async (e) => {
e.preventDefault();

const form = e.target;

if (!image) {
  return toast.error("Please select an image");
}

const imageUrl = await uploadImage(image);

const book = {
  title: form.title.value,
  author: form.author.value,
  description: form.description.value,
  image: imageUrl,
  category: form.category.value,
  deliveryFee: Number(form.deliveryFee.value),

  librarianEmail:
    session?.user?.email,
};

const result = await addBook(book);

if (result.insertedId) {
  toast.success("Book Added");
  setImage(null);
  form.reset();
  redirect('/dashboard/librarian/inventory')

}

};

return ( <div className="max-w-4xl">

  <h1 className="text-3xl font-bold mb-6">
    Add Book
  </h1>

  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >

    <input
      name="title"
      placeholder="Book Title"
      className="border p-3 w-full rounded-xl"
      required
    />

    <input
      name="author"
      placeholder="Author"
      className="border p-3 w-full rounded-xl"
      required
    />

    <div className="space-y-3">

      <label
        htmlFor="book-image"
        className="
        flex
        items-center
        justify-center
        w-full
        h-48
        border-2
        border-dashed
        border-gray-300
        rounded-2xl
        cursor-pointer
        hover:border-indigo-500
        transition
        overflow-hidden
        "
      >

        {!image ? (

          <div className="text-center">

            <p className="text-lg font-semibold">
              Upload Book Cover
            </p>

            <p className="text-sm text-gray-500 mt-1">
              JPG, PNG, WEBP
            </p>

          </div>

        ) : (

          <div className="text-center">

            <Image
  src={URL.createObjectURL(image)}
  alt="Book Preview"
  width={150}
  height={150}
  unoptimized
  className="
  object-cover
  rounded-xl
  mx-auto
  "
/>

            <p className="mt-3 text-green-600 font-medium">
              ✓ {image.name}
            </p>

          </div>

        )}

      </label>

      <input
        id="book-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setImage(
            e.target.files[0]
          )
        }
      />

    </div>

    <input
      name="category"
      placeholder="Category"
      className="border p-3 w-full rounded-xl"
      required
    />

    <input
      type="number"
      name="deliveryFee"
      placeholder="Delivery Fee"
      className="border p-3 w-full rounded-xl"
      required
    />

    <textarea
      name="description"
      placeholder="Description"
      rows={2}
      className="border p-3 w-full rounded-xl"
      required
    />

    <button
      className="
      bg-indigo-600
      hover:bg-indigo-700
      text-white
      px-6
      py-3
      rounded-xl
      transition
      "
    >
      Add Book
    </button>

  </form>

</div>

);
};

export default AddBookPage;
