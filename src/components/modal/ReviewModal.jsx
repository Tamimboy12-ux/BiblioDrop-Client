"use client";

import { useState } from "react";

const ReviewModal = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [comment, setComment] =
    useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(comment);

    setComment("");
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-4
      "
    >
      <div
        className="
        w-full
        max-w-lg
        bg-white
        rounded-3xl
        shadow-2xl
        border
        overflow-hidden
        "
      >
        <div
          className="
          flex
          items-center
          justify-between
          px-6
          py-5
          border-b
          "
        >
          <div>
            <h2
              className="
              text-2xl
              font-bold
              "
            >
              Add Review
            </h2>

            <p
              className="
              text-sm
              text-gray-500
              mt-1
              "
            >
              Share your thoughts
            </p>
          </div>

          <button
            onClick={onClose}
            className="
            w-10
            h-10
            rounded-full
            hover:bg-gray-100
            "
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          p-6
          "
        >
          <textarea
            value={comment}
            onChange={(e) =>
              setComment(
                e.target.value
              )
            }
            placeholder="
            Write your review here...
            "
            required
            className="
            w-full
            h-40
            border
            rounded-2xl
            p-4
            outline-none
            "
          />

          <div
            className="
            flex
            gap-3
            mt-5
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
              flex-1
              border
              py-3
              rounded-xl
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
              flex-1
              bg-indigo-600
              text-white
              py-3
              rounded-xl
              "
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;