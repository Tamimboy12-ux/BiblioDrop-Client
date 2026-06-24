const API = process.env.NEXT_PUBLIC_API_URL;

export const createDelivery = async (deliveryData) => {

    const res = await fetch(`${API}/deliveries`,
      {
        method: "POST",
        credentials: "include",
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
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };



  export const getLibrarianDeliveries = async (email) => {

    const res = await fetch(`${API}/deliveries/librarian/${email}`,
        {
          credentials: "include",
          cache: "no-store",
        }
      );

    return res.json();
  };



export const updateDeliveryStatus = async (id, status) => {

    const res = await fetch(`${API}/deliveries/status/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "content-type":
              "application/json",
          },

          body: JSON.stringify({status}),
        }
      );

    return res.json();
  };