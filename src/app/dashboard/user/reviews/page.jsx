"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useSession,
} from "@/lib/auth-client";

import {
  getUserReviews,
  updateReview,
  removeReview,
} from "@/services/reviewApi";
import toast from "react-hot-toast";

const MyReviewsPage =
  () => {

    const {
      data: session,
    } = useSession();

    const [reviews,
      setReviews] =
      useState([]);

    const [editingId,
      setEditingId] =
      useState(null);

    const [comment,
      setComment] =
      useState("");



    const loadReviews =
      async () => {

        const data =
          await getUserReviews(
            session.user.email
          );

        setReviews(data);

      };



    useEffect(() => {

      if (
        session?.user?.email
      ) {

        loadReviews();

      }

    }, [session]);



    const handleDelete = async (id) => {

        await removeReview(id);

        loadReviews();

        toast.success("Reviews Deleted Success")
      };



    const handleEdit = async () => {

        await updateReview( editingId, comment);

        setEditingId(
          null
        );

        setComment("");

        loadReviews();

        toast.success("Review Updated Successful")
      };



    return (

      <div
        className="
        space-y-8
        "
      >

        <div>

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            My Reviews
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Reviews you've written
          </p>

        </div>



        <div
          className="
          bg-white
          rounded-3xl
          border
          overflow-hidden
          "
        >

          <table
            className="
            w-full
            "
          >

            <thead
              className="
              bg-slate-100
              "
            >

              <tr>

                <th className="p-5 text-left">
                  Book
                </th>

                <th className="p-5 text-left">
                  Review
                </th>

                <th className="p-5">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {reviews.map(
                (
                  review
                ) => (

                  <tr
                    key={
                      review._id
                    }
                    className="
                    border-t
                    "
                  >

                    <td className="p-5">
                      {
                        review.bookTitle
                      }
                    </td>

                    <td className="p-5">
                      {
                        review.comment
                      }
                    </td>

                    <td
                      className="
                      p-5
                      "
                    >

                      <div
                        className="
                        flex
                        justify-center
                        gap-2
                        "
                      >

                        <button
                          onClick={() => {

                            setEditingId(
                              review._id
                            );

                            setComment(
                              review.comment
                            );

                          }}
                          className="
                          bg-indigo-600
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          "
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              review._id
                            )
                          }
                          className="
                          bg-red-500
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          "
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>



        {editingId && (

          <div
            className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            "
          >

            <div
              className="
              bg-white
              w-full
              max-w-lg
              rounded-3xl
              p-6
              "
            >

              <h2
                className="
                text-2xl
                font-bold
                mb-4
                "
              >
                Edit Review
              </h2>

              <textarea
                value={comment}
                onChange={(e) =>
                  setComment(
                    e.target.value
                  )
                }
                className="
                w-full
                h-32
                border
                rounded-xl
                p-4
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
                  onClick={
                    handleEdit
                  }
                  className="
                  flex-1
                  bg-green-600
                  text-white
                  py-3
                  rounded-xl
                  "
                >
                  Save
                </button>

                <button
                  onClick={() =>
                    setEditingId(
                      null
                    )
                  }
                  className="
                  flex-1
                  border
                  py-3
                  rounded-xl
                  "
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    );
};

export default MyReviewsPage;