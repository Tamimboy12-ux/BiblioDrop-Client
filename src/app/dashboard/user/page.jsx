"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useSession,
} from "@/lib/auth-client";

import {
  getUserOverview,
} from "@/services/dashboardApi";

import {

  ResponsiveContainer,

  BarChart,

  Bar,

  XAxis,

  YAxis,

  Tooltip,

} from "recharts";



const UserDashboardPage =
  () => {

    const {
      data: session,
    } = useSession();

    const [overview,
      setOverview] =
      useState(null);



    useEffect(() => {

      if (
        session?.user?.email
      ) {

        getUserOverview(
          session.user.email
        ).then(
          setOverview
        );

      }

    }, [session]);



    if (!overview) {

      return (
        <div>
          Loading...
        </div>
      );

    }



    return (

      <div
        className="
        space-y-8
        "
      >

        <div>

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            User Overview
          </h1>

        </div>



        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          <div
            className="
            bg-white
            border
            rounded-3xl
            p-6
            "
          >

            <h3
              className="
              text-gray-500
              "
            >
              Books Read
            </h3>

            <h2
              className="
              text-4xl
              font-bold
              mt-3
              "
            >
              {
                overview.totalBooksRead
              }
            </h2>

          </div>



          <div
            className="
            bg-white
            border
            rounded-3xl
            p-6
            "
          >

            <h3
              className="
              text-gray-500
              "
            >
              Pending Deliveries
            </h3>

            <h2
              className="
              text-4xl
              font-bold
              mt-3
              "
            >
              {
                overview.pendingDeliveries
              }
            </h2>

          </div>



          <div
            className="
            bg-white
            border
            rounded-3xl
            p-6
            "
          >

            <h3
              className="
              text-gray-500
              "
            >
              Total Spent
            </h3>

            <h2
              className="
              text-4xl
              font-bold
              mt-3
              "
            >
              ৳
              {
                overview.totalSpent
              }
            </h2>

          </div>

        </div>



        <div
          className="
          bg-white
          border
          rounded-3xl
          p-6
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-6
            "
          >
            Reading Activity
          </h2>

          <div
            className="
            h-[350px]
            "
          >

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={
                  overview.chartData
                }
              >

                <XAxis
                  dataKey="bookTitle"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="deliveryFee"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    );
};

export default
UserDashboardPage;