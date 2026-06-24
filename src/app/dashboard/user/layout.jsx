"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/lib/auth-client";
import UserSidebar from "@/components/dashboard/UserSidebar";


const Layout = ({ children }) => {

const router = useRouter();

const { data: session } = useSession();


useEffect(() => {

if ( session && session?.user?.role !== "user"){
  router.push("/");
}

}, [session, router]);

if (!session) {
return ( <div className="p-10">
Loading... </div>
);
}

return ( <div className="flex mt-20">

  <UserSidebar/>

  <main className="flex-1 p-8">
    {children}
  </main>

</div>

);
};

export default Layout;
