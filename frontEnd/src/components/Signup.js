import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://inotebookapp-1.onrender.com/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account Created Successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const placeholderStyle = {
    fontSize: "14px",
    color: "#999",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "40px",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
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
          Create a New Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="name"
              name="name"
              value={credentials.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
              style={{ fontSize: "16px", color: "#333", ...placeholderStyle }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
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
              style={{ fontSize: "16px", color: "#333", ...placeholderStyle }}
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
              minLength={5}
              placeholder="Create a password"
              onChange={handleChange}
              required
              style={{ fontSize: "16px", color: "#333", ...placeholderStyle }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label fw-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="cpassword"
              name="cpassword"
              value={credentials.cpassword}
              minLength={5}
              placeholder="Confirm your password"
              onChange={handleChange}
              required
              style={{ fontSize: "16px", color: "#333", ...placeholderStyle }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "8px" }}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
