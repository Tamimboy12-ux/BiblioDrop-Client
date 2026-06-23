"use client";

import { useEffect, useState,}from "react";

import { PieChart, Pie, Tooltip, ResponsiveContainer,}from "recharts";

import { getAdminStats, getBooksByCategory,}from "@/services/adminApi";

const AdminDashboard = () => {

    const [stats, setStats] = useState({});

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      const loadData = async () => {

          const statsData = await getAdminStats();
          const chart = await getBooksByCategory();

          setStats(statsData);

          setChartData(chart);
        };

      loadData();
    }, []);

    return (
      <div className="space-y-8">
        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Admin Overview
        </h1>

        <div
          className="
          grid
          md:grid-cols-4
          gap-6
          "
        >

          <div className="bg-white border rounded-3xl p-6">
            <h3>Total Users</h3>
            <p className="text-4xl font-bold mt-2">
              {stats.totalUsers || 0}
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-6">
            <h3>Total Books</h3>
            <p className="text-4xl font-bold mt-2">
              {stats.totalBooks || 0}
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-6">
            <h3>Total Deliveries</h3>
            <p className="text-4xl font-bold mt-2">
              {stats.totalDeliveries || 0}
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-6">
            <h3>Total Revenue</h3>
            <p className="text-4xl font-bold mt-2">
              $
              {stats.totalRevenue || 0}
            </p>
          </div>

        </div>

        <div
          className="
          bg-white
          border
          rounded-3xl
          p-8
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
          >
            Books By Category
          </h2>

          <div
            className="
            h-100
            "
          >

            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="_id"
                  outerRadius={150}
                  label
                />

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    );
};

export default AdminDashboard;