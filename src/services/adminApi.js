const API = process.env.NEXT_PUBLIC_API_URL;

export const getAdminStats = async () => {

    const res = await fetch(`${API}/admin/stats`,
        {
          cache:
            "no-store",
        }
      );

    return res.json();
  };


export const getBooksByCategory = async () => {

    const res = await fetch(`${API}/admin/books-by-category`,
        {
          cache:
            "no-store",
        }
      );

    return res.json();
  };



export const getTransactions = async () => {

    const res = await fetch(`${API}/transactions`,
        {
          cache:
            "no-store",
        }
      );

    return res.json();
  };