"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import AdminSidebar from "@/components/dashboard/AdminSidebar";

const Layout = ({ children }) => {
  const router = useRouter();

  const {
    data: session,
    isPending,
  } = useSession();

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        router.replace("/login");
        return;
      }

      if (session.user.role !== "admin") {
        router.replace("/");
      }
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!session || session.user.role !== "admin") {
    return null;
  }

  return (
    <div className="flex mt-20">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;