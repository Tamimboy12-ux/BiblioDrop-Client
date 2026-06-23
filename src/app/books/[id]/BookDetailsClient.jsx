"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  createDelivery,
} from "@/services/deliveryApi";

import {
  addReview,
  getBookReviews,
} from "@/services/reviewApi";

import {
  useSession,
} from "@/lib/auth-client";
import ReviewModal from "@/components/modal/ReviewModal";
import Image from "next/image";


const BookDetailsClient = ({
  book,
}) => {
  const {
    data: session,
  } = useSession();

  const [reviews, setReviews] =
    useState([]);

  const [reviewOpen,
    setReviewOpen] =
    useState(false);

  const loadReviews =
    async () => {
      try {
        const data =
          await getBookReviews(
            book._id
          );

        setReviews(
          Array.isArray(data)
            ? data
            : []
        );
      } catch {
        setReviews([]);
      }
    };

  useEffect(() => {
    if (book?._id) {
      loadReviews();
    }
  }, [book]);

  const handleRequest =
    async () => {
      if (!session?.user) {
        alert(
          "Please login first"
        );

        return;
      }

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

        status:
          "Pending",

        requestDate:
          new Date(),
      };

      await createDelivery(
        delivery
      );

      alert(
        "Delivery Requested"
      );
    };

  const handleReview =
    async (comment) => {
      const reviewData = {
        bookId:
          book._id,

        bookTitle:
          book.title,

        userName:
          session.user.name,

        userEmail:
          session.user.email,

        comment,
      };

      await addReview(
        reviewData
      );

      setReviewOpen(false);

      loadReviews();

      alert(
        "Review Added"
      );
    };

  return (
    <>
      <div
        className="
        max-w-5xl
        mx-auto
        py-10
        space-y-10
        "
      >

        <Image
            className="object-cover w-full rounded-3xl h-120"
            src={book.image}
             alt={book.title} 
             width={500} 
             height={300}>
        </Image>

        <div>
          <h1
            className="
            text-5xl
            font-bold
            "
          >
            {book.title}
          </h1>

          <p
            className="
            mt-5
            text-gray-600
            "
          >
            {book.description}
          </p>

          <div
            className="
            flex
            gap-4
            mt-8
            "
          >
            <Link
              href={`/books/${book._id}/checkout`}
              className="
              bg-indigo-600
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Proceed To Payment
            </Link>

            <button
              onClick={() =>
                setReviewOpen(
                  true
                )
              }
              className="
              border
              px-6
              py-3
              rounded-xl
              "
            >
              Add Review
            </button>
          </div>
        </div>

        <div
          className="
          space-y-6
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            "
          >
            Reviews
          </h2>

          {reviews.length ===
          0 ? (
            <div
              className="
              bg-gray-50
              border
              rounded-2xl
              p-6
              "
            >
              No Reviews Yet
            </div>
          ) : (
            <div
              className="
              grid
              gap-4
              "
            >
              {reviews.map(
                (review) => (
                  <div
                    key={
                      review._id
                    }
                    className="
                    bg-white
                    border
                    rounded-2xl
                    p-5
                    "
                  >
                    <h3
                      className="
                      font-semibold
                      "
                    >
                      {
                        review.userName
                      }
                    </h3>

                    <p
                      className="
                      text-gray-600
                      mt-2
                      "
                    >
                      {
                        review.comment
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <ReviewModal
        open={reviewOpen}
        onClose={() =>
          setReviewOpen(false)
        }
        onSubmit={
          handleReview
        }
      />
    </>
  );
};

export default BookDetailsClient;