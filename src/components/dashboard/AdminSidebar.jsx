"use client";

import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        Admin Dashboard
      </h2>

      <div className="space-y-2">

        <Link
          href="/dashboard/admin"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Overview
        </Link>

        <Link
          href="/dashboard/admin/users"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Manage Users
        </Link>

        <Link
          href="/dashboard/admin/books"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Book Approval Queue
        </Link>

        <Link
          href="/dashboard/admin/transactions"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Transactions
        </Link>

      </div>
    </aside>
  );
};

export default AdminSidebar;