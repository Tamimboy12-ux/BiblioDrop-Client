"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/lib/auth-client";
import UserSidebar from "@/components/dashboard/UserSidebar";

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

      if (session.user.role !== "user") {
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

  if (
    !session ||
    session.user.role !== "user"
  ) {
    return null;
  }

  return (
    <div className="flex mt-20">

      <UserSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default Layout;