"use client";

import { useEffect, useState,}from "react";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer,}from "recharts";

import { getAdminStats,}from "@/services/adminApi";
import { Spinner } from "@heroui/react";

const AdminDashboard = () => {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
        const data = await getAdminStats();
        setStats(data);
      };

    loadStats();
  }, []);

  if (!stats) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className=" text-4xl font-bold">
          Admin Dashboard
        </h1>
        <p className=" text-gray-500 mt-2 ">
          Platform overview
        </p>

      </div>

      <div className=" grid md:grid-cols-4 gap-6 ">

        <div className=" bg-white p-6 rounded-3xl border ">
          <p className="text-gray-500">
            Total Users
          </p>

          <h2 className=" text-3xl font-bold mt-2 ">
            {stats.totalUsers}
          </h2>
        </div>

        <div className=" bg-white p-6 rounded-3xl border ">
          <p className="text-gray-500">
            Total Books
          </p>

          <h2 className=" text-3xl font-bold mt-2 ">
            {stats.totalBooks}
          </h2>
        </div>

        <div className=" bg-white p-6 rounded-3xl border ">
          <p className="text-gray-500">
            Deliveries
          </p>

          <h2 className=" text-3xl font-bold mt-2 ">
            {stats.totalDeliveries}
          </h2>
        </div>

        <div className=" bg-white p-6 rounded-3xl border ">
          <p className="text-gray-500">
            Revenue
          </p>

          <h2 className=" text-3xl font-bold mt-2 ">
            ${stats.totalRevenue}
          </h2>
        </div>

      </div>

      <div className=" bg-white rounded-3xl border p-6 ">

        <h2 className=" text-2xl font-bold mb-6 ">
          Books By Category
        </h2>

        <div className=" h-100 ">

          <ResponsiveContainer
            width="100%"
            height={400}
          >
            <PieChart>

              <Pie
                data={
                  stats.categoryData
                }
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
              >

                {
                  stats.categoryData.map(
                    (
                      entry,
                      index
                    ) => (
                      <Cell
                        key={index}
                      />
                    )
                  )
                }

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;