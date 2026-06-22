"use client";

import Link from "next/link";

const UserSidebar = () => {
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        User Dashboard
      </h2>

      <div className="space-y-2">

        <Link
          href="/dashboard/user"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Overview
        </Link>

        <Link
          href="/dashboard/user/delivery-history"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Delivery History
        </Link>

        <Link
          href="/dashboard/user/reading-list"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Reading List
        </Link>

        <Link
          href="/dashboard/user/reviews"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          My Reviews
        </Link>

      </div>
    </aside>
  );
};

export default UserSidebar;