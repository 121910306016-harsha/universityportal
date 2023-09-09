import "bootstrap/dist/css/bootstrap.css";
import "./reg.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const nav = useNavigate();
  const loginPage = () => {
    nav("/login");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100  login-page">
      <div className="p-4 rounded border login-form">
        <h2 className="mb-3">Register</h2>
        <form className="form-group">
          <div className="mb-3">
            <label htmlFor="n" className="mb-1">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control rounded-0"
              name="n"
              required
            />
          </div>
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
            Sign Up
          </button>
          <p className="mt-4 mb-1 acc">Already have an Account?</p>
          <button
            className="btn btn-secondary border rounded-0 form-control"
            onClick={loginPage}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
