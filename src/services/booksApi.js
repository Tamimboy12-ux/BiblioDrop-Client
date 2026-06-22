const API = process.env.NEXT_PUBLIC_API_URL;

export const addBook = async (bookData) => {
  const res = await fetch(`${API}/books`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookData),
  });

  return res.json();
};