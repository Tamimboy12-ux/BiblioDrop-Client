"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-4
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        text-red-500
        "
      >
        Something Went Wrong
      </h1>

      <p
        className="
        mt-3
        text-gray-500
        "
      >
        {error?.message}
      </p>

      <button
        onClick={() => reset()}
        className="
        mt-6
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Try Again
      </button>
    </div>
  );
}