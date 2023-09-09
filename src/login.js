import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const nav = useNavigate();
  const signup = () => {
    nav("/register");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="p-3 rounded w-30 border login-form">
        <h2 className="mb-3">Login</h2>
        <form className="form-group">
          <div className="mb-3">
            <label htmlFor="email" className="mb-1">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="mb-1">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-success rounded-0 w-100">
            Log in
          </button>
          <p className="mt-4 mb-1 policy">New user?</p>
          <button
            className="btn btn-secondary border rounded-0 form-control"
            onClick={signup}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
