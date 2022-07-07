import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      alert("Login Success!");
      return navigate("/Dashboard");
    }
    return alert("Login Failed!");
  };

  return (
    <>
      <h1>Halaman Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input {...register("username")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
