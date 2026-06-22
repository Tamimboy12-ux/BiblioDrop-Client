const API = process.env.NEXT_PUBLIC_API_URL;

export const getAdminStats = async () => {
 const res = await fetch(`${API}/admin/stats`,
        {
          cache: "no-store",
        }
      );

    return res.json();
  };