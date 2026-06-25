import Link from "next/link";

export default function NotFound() {
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
        text-8xl
        font-bold
        text-indigo-600
        "
      >
        404
      </h1>

      <h2
        className="
        text-3xl
        font-bold
        mt-4
        "
      >
        Page Not Found
      </h2>

      <p
        className="
        text-gray-500
        mt-3
        "
      >
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="
        mt-6
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Back To Home
      </Link>
    </div>
  );
}