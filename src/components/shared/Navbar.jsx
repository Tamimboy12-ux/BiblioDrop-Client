"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {  Bars,  Xmark,  Book,  ChevronDown} from "@gravity-ui/icons";

import { useSession, signOut}from "@/lib/auth-client";


const Navbar = () => {

  const pathname = usePathname();

  const { data: session } = useSession();
  const user = session?.user;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const navLinks = [
    {
      name:"Home",
      href:"/"
    },
    {
      name:"Browse Books",
      href:"/books"
    }
  ];

  const dashboardLinks = [
    {
      name:"User Dashboard",
      href:"/dashboard/user"
    },
    {
      name:"Librarian Dashboard",
      href:"/dashboard/librarian"
    },
    {
      name:"Admin Dashboard",
      href:"/dashboard/admin"
    }
  ];



  return (

    <nav className=" fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">

      <div className=" max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Book width={28}/>
          BiblioDrop
        </Link>

        <div className=" hidden md:flex items-center gap-8">

          {
            navLinks.map(link=>(
              <Link
                key={link.href}
                href={link.href}
                className={`
                font-medium
                ${
                  pathname===link.href
                  ?
                  "text-indigo-600"
                  :
                  "text-gray-700 hover:text-indigo-600"
                }
                `}
              >
                {link.name}

              </Link>
            ))
          }

          {
            user && (
            <div className="relative">
              <button
                onClick={()=>setDashboardOpen(!dashboardOpen)}
                className="flex items-center gap-1 font-medium"
              >
                Dashboard
                <ChevronDown width={16}/>
              </button>

              {
                dashboardOpen && (
                <div className=" absolute top-12 right-0 w-56 bg-white rounded-xl shadow-xl p-2">
                  {
                    dashboardLinks.map(item=>(
                      <Link
                        key={item.href}
                        href={item.href}
                        className=" block px-4 py-3 rounded-lg hover:bg-indigo-50 "
                      >
                        {item.name}
                      </Link>

                    ))
                  }

                </div>

                )
              }

            </div>

            )
          }

        </div>

        <div className=" hidden md:flex items-center gap-3">
          {
            user ? (
              <>
              <img
                src={
                  user?.image ||
                  "https://i.pravatar.cc/100"
                }
                className=" h-10 w-10 rounded-full object-cover "
                alt="profile"
              />

              <button
                onClick={()=>signOut()}
                className=" bg-red-500 text-white px-5 py-2 rounded-xl "
              >
                Logout
              </button>
              </>

            ) : (

              <>
              <Link
                href="/login"
                className=" border px-5 py-2 rounded-xl "
              >
                Login
              </Link>

              <Link
                href="/register"
                className=" bg-indigo-600 text-white px-5 py-2 rounded-xl "
              >
                Register
              </Link>
              </>

            )
          }

        </div>

        <button
          onClick={()=>setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {
            mobileOpen
            ?
            <Xmark width={28}/>
            :
            <Bars width={28}/>
          }
        </button>
      </div>

      {
        mobileOpen && (
        <div className=" md:hidden bg-white px-6 py-5 space-y-4">
          {
            navLinks.map(link=>(
              <Link
                key={link.href}
                href={link.href}
                className="block"
              >
                {link.name}
              </Link>
            ))
          }

          {
            user && (
            <div className="space-y-2">
              <p className="font-semibold text-gray-500">
                Dashboard
              </p>

              {
                dashboardLinks.map(item=>(
                  <Link
                    key={item.href}
                    href={item.href}
                    className=" block pl-4 py-2 "
                  >
                    {item.name}
                  </Link>
                ))
              }

            </div>
            )
          }

          {
            user ? (
              <button
                onClick={()=>signOut()}
                className=" w-full bg-red-500 text-white py-2 rounded-xl "
              >
                Logout
              </button>

            ) : (

              <div className="space-y-3">
                <Link
                  href="/login"
                  className=" block text-center border py-2 rounded-xl "
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className=" block text-center bg-indigo-600 text-white py-2 rounded-xl "
                >
                  Register
                </Link>

              </div>

            )
          }

        </div>

        )
      }

    </nav>
  );

};


export default Navbar;