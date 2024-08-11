import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/createUser", { name, email, phone })
      .then((result) =>{
        navigate('/');
        console.log(result)})
      .catch((err) => console.log(err));
  };
  return (
    <div className="container my-5 p-4 shadow-lg rounded bg-white">
      <h2 className="mb-4 text-center text-primary">Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
          
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
          
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
