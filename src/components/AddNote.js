import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };

  return (
    <div className="my-5 mx-auto" style={{ maxWidth: "600px" }}>
      <h2
        className="mb-4 text-center"
        style={{ fontWeight: "700", color: "#007bff" }}
      >
        Add a Note
      </h2>
      <form className="shadow p-4 rounded-3 bg-white">
        <div className="mb-4">
          <label htmlFor="title" className="form-label fw-semibold">
            Title
          </label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            id="title"
            name="title"
            placeholder="Enter note title"
            value={note.title}
            onChange={handleChange}
            style={{
              boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
              fontSize: "16px",
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="form-label fw-semibold">
            Description
          </label>
          <textarea
            className="form-control form-control-lg rounded-pill"
            id="description"
            name="description"
            placeholder="Write your note description here..."
            value={note.description}
            onChange={handleChange}
            rows={3}
            style={{
              boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
              fontSize: "16px",
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tag" className="form-label fw-semibold">
            Tag
          </label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill"
            id="tag"
            name="tag"
            placeholder="Add a tag (optional)"
            value={note.tag}
            onChange={handleChange}
            style={{
              boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
              fontSize: "16px",
            }}
          />
        </div>
        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          type="submit"
          className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold"
          onClick={handleClick}
          style={{ letterSpacing: "0.05em" }}
        >
          Add Note
        </button>
        {(note.title.length < 3 || note.description.length < 5) && (
          <small
            style={{
              color: "red",
              display: "block",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Title must be at least 3 characters and description at least 5
            characters.
          </small>
        )}
      </form>
    </div>
  );
};
