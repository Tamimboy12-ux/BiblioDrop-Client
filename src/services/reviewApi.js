const API = process.env.NEXT_PUBLIC_API_URL;


export const addReview = async (reviewData) => {
    const res = await fetch(`${API}/reviews`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(
            reviewData
          ),
        }
      );

    return res.json();
  };



export const getBookReviews = async (bookId) => { 
  const res = await fetch(`${API}/reviews/book/${bookId}`,
      {
        cache:"no-store",
      }
    );
  const data = await res.json();

  return data;
};



export const getUserReviews = async (email) => {
    const res = await fetch(`${API}/reviews/user/${email}`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };


export const updateReview = async (id, comment) => {
    const res = await fetch(`${API}/reviews/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify({comment,}),
        }
      );

    return res.json();
  };



export const removeReview = async (id) => {
    const res = await fetch(`${API}/reviews/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

    return res.json();
  };