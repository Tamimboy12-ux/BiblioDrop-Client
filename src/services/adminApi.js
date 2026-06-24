const API = process.env.NEXT_PUBLIC_API_URL;

export const getAdminStats = async () => {

    const res = await fetch(`${API}/admin/stats`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };


export const getBooksByCategory = async () => {

    const res = await fetch(`${API}/admin/books-by-category`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };



export const getTransactions = async () => {

    const res = await fetch(`${API}/transactions`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };