const API = process.env.NEXT_PUBLIC_API_URL;


export const getAllUsers = async () => {
  const res = await fetch(`${API}/admin/users`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};


export const updateUserRole = async ( id, role)=> {
  const res = await fetch(`${API}/admin/users/role/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        role,
      }),
    }
  );

  return res.json();
};


export const deleteUser = async (id) => {
  const res = await fetch(`${API}/admin/users/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
};