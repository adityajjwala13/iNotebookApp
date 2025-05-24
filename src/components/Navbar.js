import { Link, useLocation, useHistory } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "linear-gradient(to right, #141E30, #243B55)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ color: "#fff", fontSize: "22px", fontWeight: "600" }}
        >
          📒 iNotebook
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link
                className="btn btn-outline-light me-2"
                to="/login"
                role="button"
                style={{ borderRadius: "6px" }}
              >
                Log In
              </Link>
              <Link
                className="btn btn-primary"
                to="/signup"
                role="button"
                style={{
                  backgroundColor: "#00c6ff",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-danger"
              style={{ borderRadius: "6px" }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
