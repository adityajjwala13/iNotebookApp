import React, { useContext } from "react";
import "./css/Noteitem.css";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const { note, updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div>
      <div className="card my-3" style={{ width: "282px" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fas fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted Successfully","success");
            }}
          ></i>
          <i
            className="far fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
