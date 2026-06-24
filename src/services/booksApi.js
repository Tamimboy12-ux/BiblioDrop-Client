const API = process.env.NEXT_PUBLIC_API_URL;

export const addBook = async (bookData) => {
  const res = await fetch(`${API}/books`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookData),
  });

  return res.json();
};


export const getMyBooks = async (email) => {
  const res = await fetch(`${API}/books/librarian/${email}`,{
    credentials: "include",
  });

  return res.json();
};


export const getBookById = async (id) => {
  const res = await fetch(
    `${API}/books/${id}`
  );

  return res.json();
};


export const getPublishedBooks = async () => {
    const res = await fetch(`${API}/published-books`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  };


export const deleteBook = async (id) => {
  const res = await fetch(`${API}/books/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  return res.json();
};


export const updateBook = async ( id, bookData) => {
  const res = await fetch(
    `${API}/books/${id}`,
    {
      method: "PATCH",
      credentials: "include",
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
      credentials: "include",
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



export const getPendingBooks = async()=>{
 const res = await fetch(`${API}/books/pending`,
    {
     credentials: "include", 
     cache:"no-store"
    }
 );

 const data = await res.json()

 return data;
};


export const approveBook = async(id)=>{
 const res = await fetch(`${API}/books/approve/${id}`,
    {
    method:"PATCH",
    credentials: "include",
    }
 );

 const data = await res.json()

 return data;
};
