"use client";


import Link from "next/link";

import {
  BookOpen,
  Rocket,
  GraduationCap,
  Heart,
  Sparkles,
} from "@gravity-ui/icons";
import { BriefcaseBusiness } from "lucide-react";


const PopularCategories = () => {


  const categories = [

    {
      id:1,
      title:"Fiction",
      description:"Stories & novels",
      icon:<BookOpen width={35}/>,
      link:"/books?category=fiction"
    },

    {
      id:2,
      title:"Sci-Fi",
      description:"Future & technology",
      icon:<Rocket width={35}/>,
      link:"/books?category=sci-fi"
    },

    {
      id:3,
      title:"Academic",
      description:"Study materials",
      icon:<GraduationCap width={35}/>,
      link:"/books?category=academic"
    },

    {
      id:4,
      title:"Romance",
      description:"Love stories",
      icon:<Heart width={35}/>,
      link:"/books?category=romance"
    },

    {
      id:5,
      title:"Self Help",
      description:"Improve yourself",
      icon:<Sparkles width={35}/>,
      link:"/books?category=self-help"
    },

    {
      id:6,
      title:"Business",
      description:"Career & finance",
      icon:<BriefcaseBusiness width={35}/>,
      link:"/books?category=business"
    }

  ];

  return (


    <section className="
      py-20
      px-6
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        <div className="
          text-center
          mb-14
        ">

          <h2 className="
            text-3xl
            md:text-5xl
            font-bold
            text-slate-900
          ">

            Popular Categories

          </h2>

          <p className="
            text-gray-500
            mt-4
          ">

            Explore books by your favorite categories

          </p>

        </div>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
        ">

          {
            categories.map((category)=>(

              <Link

                href={category.link}

                key={category.id}

                className="
                group
                bg-white
                rounded-3xl
                p-6
                shadow-md
                border
                hover:-translate-y-2
                transition
                "

              >

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-indigo-100
                  text-indigo-600
                  flex
                  items-center
                  justify-center
                  group-hover:bg-indigo-600
                  group-hover:text-white
                  transition
                ">

                  {category.icon}

                </div>

                <h3 className="
                  mt-5
                  font-bold
                  text-lg
                  text-gray-900
                ">

                  {category.title}

                </h3>

                <p className="
                  text-sm
                  text-gray-500
                  mt-2
                ">

                  {category.description}

                </p>

              </Link>

            ))
          }

        </div>

      </div>

    </section>

  );

};


export default PopularCategories;