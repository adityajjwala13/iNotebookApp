import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      // Save token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  // Inline placeholder style (React can't style placeholder pseudo-element directly)
  const inputStyle = {
    fontSize: "16px",
    color: "#333",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#fff",
          padding: "40px 30px",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "28px",
            color: "#007bff",
            marginBottom: "20px",
          }}
        >
          📒 iNotebook
        </h1>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Login Here
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              name="email"
              value={credentials.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              name="password"
              value={credentials.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "8px" }}
          >
            Log In
          </button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
