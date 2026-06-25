"use client";

import { useEffect } from "react";
import { useSession } from "@/lib/auth-client";

export default function JwtSync() {
  const { data: session } = useSession();

  useEffect(() => {
    const createJwt = async () => {
      if (session?.user?.email) {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/jwt`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: session.user.email,
            }),
          }
        );
      }
    };

    createJwt();
  }, [session]);

  return null;
}