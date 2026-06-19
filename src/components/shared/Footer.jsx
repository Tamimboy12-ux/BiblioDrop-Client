import Link from "next/link";

import {
  BookOpen,
} from "@gravity-ui/icons";


import {
  FaFacebookF,
  FaGithub,
  FaTwitter
} from "react-icons/fa";
import { MailCheck } from "lucide-react";



const Footer = () => {


  return (


    <footer className="mt-24 bg-slate-950 text-white">


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-14
        grid
        md:grid-cols-4
        gap-10
        "
      >


        <div>


          <div
            className="
            flex
            items-center
            gap-3
            text-2xl
            font-bold
            text-indigo-400
            "
          >

            <BookOpen width={32}/>

            BiblioDrop


          </div>



          <p
            className="
            mt-5
            text-gray-400
            leading-7
            "
          >

            Your online book delivery platform
            connecting readers with libraries
            and book owners.


          </p>



        </div>



        <div>


          <h3 className="text-lg font-semibold mb-5">

            Explore

          </h3>



          <div className="space-y-3 text-gray-400">


            <Link
              href="/"
              className="block hover:text-indigo-400"
            >
              Home
            </Link>



            <Link
              href="/books"
              className="block hover:text-indigo-400"
            >
              Browse Books
            </Link>

            <Link
              href="/dashboard/user"
              className="block hover:text-indigo-400"
            >
              Dashboard
            </Link>

          </div>



        </div>


        <div>


          <h3 className="text-lg font-semibold mb-5">

            Company

          </h3>

          <div className="space-y-3 text-gray-400">


            <p className="hover:text-white cursor-pointer">
              About Us
            </p>


            <p className="hover:text-white cursor-pointer">
              Contact
            </p>


            <p className="hover:text-white cursor-pointer">
              Privacy Policy
            </p>

          </div>

        </div>

        <div>

          <h3 className="text-lg font-semibold mb-5">

            Newsletter

          </h3>

          <p className="text-gray-400 mb-4">

            Get latest book updates

          </p>

          <div
            className="
            flex
            rounded-xl
            overflow-hidden
            bg-white
            "
          >

            <input

              type="email"

              placeholder="Enter email"

              className="
              flex-1
              px-4
              py-3
              text-black
              outline-none
              placeholder:text-gray-500
              "

            />

            <button
              className="
              bg-indigo-600
              px-5
              hover:bg-indigo-700
              "
            >

              <MailCheck width={22}/>

            </button>

          </div>

          <div
            className="
            flex
            gap-4
            mt-6
            "
          >

            <Link
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              transition
              "
            >

              <FaFacebookF/>

            </Link>

            <Link
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              transition
              "
            >

              <FaGithub/>

            </Link>

            <Link
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              transition
              "
            >

              <FaTwitter/>

            </Link>

          </div>

        </div>

      </div>

      <div
        className="
        border-t
        border-slate-800
        text-center
        py-5
        text-gray-400
        "
      >

        © 2026 BiblioDrop. All rights reserved.

      </div>

    </footer>

  )

}


export default Footer;