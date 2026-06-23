const API = process.env.NEXT_PUBLIC_API_URL;



export const addReview = async (reviewData) => {

    const res = await fetch(`${API}/reviews`,
        {
          method: "POST",
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
   
  const res =
    await fetch(
      `${API}/reviews/book/${bookId}`,
      {
        cache:"no-store",
      }
    );


  const data =
    await res.json();


  console.log(
    "REVIEWS API DATA:",
    data
  );


  return data;
};