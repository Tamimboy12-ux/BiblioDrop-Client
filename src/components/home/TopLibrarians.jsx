"use client";

import Image from "next/image";

import {
  Star,
  Person
} from "@gravity-ui/icons";


const TopLibrarians = () => {

  const librarians = [

    {
      id:1,
      name:"Sarah Johnson",
      role:"Professional Librarian",
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      books:320,
      rating:4.9
    },

    {
      id:2,
      name:"David Smith",
      role:"Book Provider",
      image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      books:280,
      rating:4.8
    },

    {
      id:3,
      name:"Emma Wilson",
      role:"Library Owner",
      image:"https://images.unsplash.com/photo-1580489944761-15a19d654956",
      books:410,
      rating:5
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

            Top Librarians

          </h2>

          <p className="
            mt-4
            text-gray-500
            max-w-xl
            mx-auto
          ">

            Meet our trusted book providers
            who deliver quality reading
            experiences.

          </p>

        </div>

        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">

          {
            librarians.map((person)=>(

              <div
                key={person.id}
                className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                border
                hover:-translate-y-2
                transition
                "
              >

                <div className="
                  flex
                  justify-center
                ">

                  <Image

                    src={person.image}

                    alt={person.name}

                    width={120}

                    height={120}

                    className="
                    rounded-full
                    object-cover
                    h-[120px]
                    w-[120px]
                    "

                  />

                </div>

                <div className="
                  text-center
                  mt-5
                ">

                  <h3 className="
                    text-xl
                    font-bold
                    text-gray-900
                  ">

                    {person.name}

                  </h3>

                  <p className="
                    text-indigo-600
                    mt-1
                  ">

                    {person.role}

                  </p>

                </div>

                <div className="
                  flex
                  justify-between
                  mt-6
                  bg-gray-50
                  rounded-xl
                  p-4
                ">

                  <div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Books
                    </p>

                    <h4 className="font-bold">
                      {person.books}+
                    </h4>

                  </div>

                  <div>

                    <div className="
                      flex
                      items-center
                      gap-1
                      text-yellow-500
                    ">

                      <Star width={18}/>

                      <span className="font-bold">
                        {person.rating}
                      </span>

                    </div>

                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      Rating
                    </p>

                  </div>

                </div>

              </div>

            ))
          }

        </div>
      </div>
    </section>

  );

};



export default TopLibrarians;