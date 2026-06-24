const API = process.env.NEXT_PUBLIC_API_URL;

export const getUserOverview = async (email) => {

    const res = await fetch(`${API}/dashboard/user-overview/${email}`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };



  export const getLibrarianOverview = async (email) => {

    const res = await fetch(`${API}/dashboard/librarian-overview/${email}`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };