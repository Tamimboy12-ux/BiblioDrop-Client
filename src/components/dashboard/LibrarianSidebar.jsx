"use client";

import Link from "next/link";

const LibrarianSidebar = () => {
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        Librarian Dashboard
      </h2>

      <div className="space-y-2">

        <Link
          href="/dashboard/librarian"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Overview
        </Link>

        <Link
          href="/dashboard/librarian/add-book"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Add Book
        </Link>

        <Link
          href="/dashboard/librarian/inventory"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Manage Inventory
        </Link>

        <Link
          href="/dashboard/librarian/deliveries"
          className="block p-3 rounded-xl hover:bg-indigo-50"
        >
          Manage Deliveries
        </Link>

      </div>
    </aside>
  );
};

export default LibrarianSidebar;