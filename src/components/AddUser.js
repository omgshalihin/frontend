import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onInputSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/users", user);
    navigate("/");
  };

  return (
    <>
      <div className="bg-slate-300 text-center">
        <h2 className="m-4 text-center text-lg">Register User</h2>
        <form onSubmit={(e) => onInputSubmit(e)}>
          <div>
            <label className="mt-2 block">Name</label>
            <input
              onChange={(e) => onInputChange(e)}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="mt-2 rounded border py-2 px-2 shadow"
            />
          </div>
          <div>
            <label className="mt-2 block">Email</label>
            <input
              onChange={(e) => onInputChange(e)}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-2 rounded border py-2 px-2 shadow"
            />
          </div>
          <div className="mt-4">
            <button className="rounded bg-green-600 px-4 py-4 text-white hover:bg-green-700">
              Register
            </button>
            <Link
              to="/"
              className="mx-2 rounded bg-red-600 px-4 py-4 text-white hover:bg-red-700"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
