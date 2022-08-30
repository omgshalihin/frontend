import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

const Homepage = () => {
  const [users, setUsers] = useState([false]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/users");
    console.log(response.data);
    setUsers(response.data);
  };

  //   const { id } = useParams();
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
    getAllUsers();
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr
              key={id}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="py-4 px-6">{user.name}</td>
              <td className="py-4 px-6">{user.email}</td>
              <td>
                <Link
                  to={`/edituser/${user.id}`}
                  className="py-4 px-6 hover:text-blue-500"
                >
                  Edit
                </Link>
                <button
                  className="py-4 px-6 hover:text-red-500"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
