"use client";

import { useEffect, useState,}from "react";

import { getAllUsers, updateUserRole, deleteUser,}from "@/services/usersApi";
import { Avatar, Spinner } from "@heroui/react";


const AdminUsersPage = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {

  const data = await getAllUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRoleChange = async (id, role) => {
      await updateUserRole(id, role);
      loadUsers();
    };

  const handleDelete = async (id) => {
      const confirmDelete = confirm("Delete this user?")

      if (!confirmDelete) return;
      await deleteUser(id);
      loadUsers();
    };


  if (loading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Success</span>
      </div>
    );
  }


  return (
    <div className="space-y-8">
      <div>
        <h1
          className="
          text-4xl
          font-bold
          text-slate-800
          "
        >
          Manage Users
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Manage all users,
          librarians and admins.
        </p>
      </div>

      <div
        className="
        bg-white
        rounded-3xl
        border
        shadow-sm
        overflow-hidden
        "
      >

        <table
          className="w-full"
        >
          <thead
            className="
            bg-slate-100
            "
          >
            <tr>
              <th
                className="
                p-5
                text-left
                "
              >
                User
              </th>

              <th
                className="
                p-5
                "
              >
                Email
              </th>

              <th
                className="
                p-5
                "
              >
                Role
              </th>

              <th
                className="
                p-5
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(
                (user) => (
                  <tr
                    key={user._id}
                    className="
                    border-t
                    "
                  >
                    <td
                      className="
                      p-5
                      "
                    >
                      <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                      >
                        <Avatar>
                          <Avatar.Image alt={user?.name} src={user?.image} />
                          <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>

                        <div>

                          <h3
                            className="
                            font-semibold
                            "
                          >
                            {user.name}
                          </h3>
                        </div>
                      </div>
                    </td>

                    <td
                      className="
                      text-center
                      "
                    >
                      {user.email}
                    </td>

                    <td
                      className="
                      text-center
                      "
                    >
                      <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-indigo-100
                        text-indigo-700
                        text-sm
                        "
                      >
                        {user.role}
                      </span>

                    </td>

                    <td>
                      <div
                        className="
                        flex
                        justify-center
                        gap-2
                        "
                      >

                        <button

                          onClick={() =>
                            handleRoleChange(
                              user._id,
                              "admin"
                            )
                          }

                          className="
                          px-3
                          py-2
                          rounded-xl
                          bg-purple-600
                          text-white
                          "
                        >
                          Make Admin
                        </button>

                        <button
                          onClick={() =>
                            handleRoleChange(
                              user._id,
                              "librarian"
                            )
                          }
                          className="
                          px-3
                          py-2
                          rounded-xl
                          bg-blue-600
                          text-white
                          "
                        >
                          Librarian
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              user._id
                            )
                          }
                          className="
                          px-3
                          py-2
                          rounded-xl
                          bg-red-500
                          text-white
                          "
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminUsersPage;