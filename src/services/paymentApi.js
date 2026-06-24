const API = process.env.NEXT_PUBLIC_API_URL;

export const createPaymentIntent = async (amount) => {

    const res = await fetch(`${API}/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "content-type":
              "application/json",
          },

          body: JSON.stringify({amount,}),
        }
      );

    return res.json();
  };



export const saveTransaction = async (data) => {

    const res = await fetch(`${API}/transactions`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );

    return res.json();
  };