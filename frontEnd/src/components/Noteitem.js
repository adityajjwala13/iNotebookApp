import React, { useContext } from "react";
import "./css/Noteitem.css";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div
      className="note-card rounded-3 my-3"
      style={{
        width: "280px",
        border: "1px solid #ddd", // light grey border
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // subtle shadow
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ minHeight: "180px" }}
      >
        <div>
          <h5
            className="card-title text-primary fw-bold"
            style={{ fontSize: "1.3rem" }}
          >
            {note.title}
          </h5>
          <p
            className="card-text text-secondary"
            style={{ fontSize: "1rem", minHeight: "70px" }}
          >
            {note.description}
          </p>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-3">
          <i
            className="fas fa-trash-alt text-danger mx-2"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "color 0.2s",
            }}
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted Successfully", "success");
            }}
            title="Delete Note"
            onMouseEnter={(e) => (e.target.style.color = "#b00020")}
            onMouseLeave={(e) => (e.target.style.color = "red")}
          ></i>

          <i
            className="far fa-edit text-primary mx-2"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              transition: "color 0.2s",
            }}
            onClick={() => {
              updateNote(note);
            }}
            title="Edit Note"
            onMouseEnter={(e) => (e.target.style.color = "#004085")}
            onMouseLeave={(e) => (e.target.style.color = "#0d6efd")}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
