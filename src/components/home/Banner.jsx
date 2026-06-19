"use client";


import Image from "next/image";
import Link from "next/link";


import { Button } from "@heroui/react";


import {
  BookOpen,
  Sparkles,
  Star
} from "@gravity-ui/icons";
import { Truck } from "lucide-react";



const Banner = () => {


  return (

    <section className="pt-28 px-6 pb-12">


      <div
        className="
        max-w-7xl
        mx-auto
        rounded-[32px]
        overflow-hidden
        bg-gradient-to-br
        from-indigo-700
        via-purple-700
        to-slate-950
        shadow-2xl
        "
      >


        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
          p-8
          md:p-14
          "
        >

          <div className="
            text-white
            space-y-6
          ">


            <div
              className="
              inline-flex
              items-center
              gap-2
              bg-white/20
              px-5
              py-2
              rounded-full
              "
            >

              <Sparkles width={20}/>


              <span>
                Online Book Delivery
              </span>


            </div>

            <h1
              className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              "
            >

              Your Local Library

              <br />

              <span className="text-indigo-200">

                Delivered

              </span>


            </h1>

            <p
              className="
              text-indigo-100
              text-lg
              leading-8
              "
            >

              Browse thousands of books from
              trusted libraries and book owners.
              Get your favorite books delivered
              to your doorstep.

            </p>

            <div className="flex flex-wrap gap-4">

             <Link href={"/books"}>
               <Button variant="outline" className="text-white rounded-xl">
                 Browse Books
               </Button>
             </Link>

              <div className=" flex items-center gap-2 bg-white/20 px-5 rounded-xl">
                <Truck width={22}/>
                Fast Delivery
              </div>

            </div>

            <div className="
              flex
              gap-10
              pt-5
            ">

              <div>

                <h2 className="
                  text-3xl
                  font-bold
                ">

                  1000+

                </h2>

                <p className="text-indigo-200">

                  Books

                </p>

              </div>

              <div>

                <h2 className="
                  text-3xl
                  font-bold
                ">

                  500+

                </h2>

                <p className="text-indigo-200">

                  Readers

                </p>

              </div>

            </div>

          </div>

          <div className="relative">

            <div
              className="
              bg-white/10
              backdrop-blur-xl
              p-4
              rounded-3xl
              "
            >

              <Image

                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"

                alt="Library books"

                width={700}

                height={500}

                priority

                className="
                rounded-3xl
                h-[420px]
                w-full
                object-cover
                "

              />

            </div>

            <div
              className="
              absolute
              bottom-6
              left-6
              bg-white
              rounded-2xl
              shadow-xl
              p-5
              w-52
              "
            >

              <div className="
                flex
                gap-2
                text-indigo-600
              ">

                <BookOpen width={28}/>

                <Star width={22}/>

              </div>

              <h3
                className="
                text-gray-900
                font-bold
                mt-3
                "
              >
                Popular Books

              </h3>

              <p className="
                text-gray-500
                text-sm
              ">
                Read. Order. Enjoy.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};



export default Banner;