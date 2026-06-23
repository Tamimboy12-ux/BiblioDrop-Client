const API = process.env.NEXT_PUBLIC_API_URL;

export const getReadingList = async (email) => {
    const res = await fetch(`${API}/reading-list/${email}`);

    return res.json();
  };