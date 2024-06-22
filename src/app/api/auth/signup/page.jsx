"use client";

import React from "react";

const signUpPage =  () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newUser = {
      name:form.name.value,
      email:form.email.value,
      password:form.password.value,
      image:form.image.value,
      type:form.type.value,
    }
    const resp = await fetch('http://localhost:3000/api/auth/signup/newUser',{
      body:JSON.stringify(newUser),
      method:"POST",
      headers:{
        'content-type':'application/json'
      }
    })
    console.log(resp);
  };

  return (
    <div className="flex items-center mb-28 justify-center mt-24">
      <div>
        <h6 className="text-lg font-semibold">
          Sign Up with Email and Password
        </h6>
        <div>
          <form onSubmit={handleRegister} action="">
            <label htmlFor="email">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your email"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="image">Image:</label>
            <input
              type="url"
              name="image"
              id="image"
              placeholder="your photo url"
              className="outline-none border-transparent p-3 text-slate-700"
            />
            <br />
            <br />
            <label htmlFor="type">Type:</label>
            <select name="type" id="type" placeholder="user type" className="text-black ">
              <option value="">---Select Type---</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="member">Member</option>
            </select>

            <br />
            <br />
            <button type="submit" className="bg-orange-500 p-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUpPage;
