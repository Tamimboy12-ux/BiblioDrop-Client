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


export const getMyBooks = async (email) => {
  const res = await fetch(`${API}/books/librarian/${email}`);

  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${API}/books/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
};


export const getBookById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`
  );

  return res.json();
};

export const updateBook = async ( id, bookData) => {
  const res = await fetch(
    `${API}/books/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }
  );

  return res.json();
};


export const updateBookStatus = async ( id, status ) => {
  const res = await fetch(`${API}/books/status/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  return res.json();
};