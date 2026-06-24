"use client";

import { useEffect, useState,}from "react";
import { useSession,}from "@/lib/auth-client";

import { getLibrarianOverview,}from "@/services/dashboardApi";

import { ResponsiveContainer, PieChart, Pie, Tooltip,}from "recharts";
import { Spinner } from "@heroui/react";


const LibrarianDashboard = () => {

    const { data: session,}= useSession();
    const [data, setData] = useState(null);

    useEffect(() => {
      if (session?.user?.email){

        getLibrarianOverview(
          session?.user?.email
        ).then(setData);
      }

    }, [session]);

    if (!data)
      return (
        <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Loading...</span>
        </div>
      )


    return (
      <div className="space-y-8">
        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Librarian Overview
        </h1>

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
            <p>
              Total Books
            </p>

            <h2
              className="
              text-4xl
              font-bold
              "
            >
              {data.totalBooks}
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
            <p>
              Earnings
            </p>

            <h2
              className="
              text-4xl
              font-bold
              "
            >
              $
              {data.totalEarnings}
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
            <p>
              Pending Requests
            </p>

            <h2
              className="
              text-4xl
              font-bold
              "
            >
              {data.pendingRequests}
            </h2>
          </div>

        </div>

        <div
          className="
          bg-white
          border
          rounded-3xl
          p-6
          h-100
          "
        >

          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data.chartData}
                dataKey="deliveryFee"
                nameKey="bookTitle"
              />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>

    );
};

export default LibrarianDashboard;