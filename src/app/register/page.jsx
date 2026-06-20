"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signUp, signIn } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const form = e.target;

    const name = form.name.value.trim();
    const image = form.image.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const role = form.role.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const result = await signUp.email({
        name,
        email,
        password,
        image,
        role,
      });

      if (result?.error) {
        setError(result.error.message);
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join BiblioDrop today
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <input
            name="image"
            type="url"
            placeholder="Photo URL"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <select
            name="role"
            defaultValue="user"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option value="user">
              Reader
            </option>

            <option value="librarian">
              Librarian
            </option>
          </select>

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-gray-400 text-sm">
            OR
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border py-3 rounded-xl hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;