"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars, Xmark, Book, ChevronDown,}from "@gravity-ui/icons";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);


  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Book width={28} height={28}/>
          BiblioDrop
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            href="/books"
            className="hover:text-indigo-600"
          >
            Browse Books
          </Link>

          <div className="relative">

            <button
              onClick={()=>setDashboard(!dashboard)}
              className="flex items-center gap-1"
            >
              Dashboard
              <ChevronDown width={18}/>
            </button>

            {
              dashboard &&
              <div className="absolute top-8 bg-white shadow-lg rounded-xl p-3 w-44">
                <Link
                  href="/dashboard/user"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  User
                </Link>

                <Link
                  href="/dashboard/librarian"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Librarian
                </Link>

                <Link
                  href="/dashboard/admin"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Admin
                </Link>

              </div>
            }

          </div>

          <Link
            href="/login"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            Login
          </Link>

        </div>

        <button
          className="md:hidden"
          onClick={()=>setOpen(!open)}
        >

          {
            open ?
            <Xmark width={28}/>
            :
            <Bars width={28}/>
          }
        </button>

      </div>

      {
        open &&
        <div className="md:hidden px-6 pb-5 space-y-4">

          <Link
            href="/"
            className="block"
          >
            Home
          </Link>

          <Link
            href="/books"
            className="block"
          >
            Browse Books
          </Link>

          <Link
            href="/dashboard/user"
            className="block"
          >
            Dashboard
          </Link>

          <Link
            href="/login"
            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Login
          </Link>

        </div>
      }

    </nav>
  )
}


export default Navbar;