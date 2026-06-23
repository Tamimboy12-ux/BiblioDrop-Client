const API = process.env.NEXT_PUBLIC_API_URL;

export const createDelivery = async (deliveryData) => {

    const res = await fetch(`${API}/deliveries`,
      {
        method: "POST",
        headers: {
          "content-type":
            "application/json",
        },

        body: JSON.stringify(deliveryData),
      }
    );

    return res.json();
  };


  export const getUserDeliveries = async (email) => {
    
    const res = await fetch(`${API}/deliveries/user/${email}`,
        {
          cache: "no-store",
        }
      );

    return res.json();
  };