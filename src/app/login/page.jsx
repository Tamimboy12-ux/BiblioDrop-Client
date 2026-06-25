"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;

    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message);
        toast.error("Logged In Failed");
        return;
        }
        
        await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/jwt`,
        {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
        email,
        }),
        }
        );

toast.success("Logged In Successful");

router.push("/");
router.refresh();

    } catch (error) {
      setError("Login failed");
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
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your BiblioDrop account
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl"
          >
            {loading ? "Signing In..." : "Login"}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1"></div>

          <span className="text-gray-400 text-sm">
            OR
          </span>

          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <Button
          variant="outline"
          onClick={handleGoogleLogin}
          className="w-full rounded-xl"
        >
          <FaGoogle />
          Continue with Google
        </Button>

        <div className="mt-6 text-center text-gray-500">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 font-semibold"
          >
            Register
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LoginPage;