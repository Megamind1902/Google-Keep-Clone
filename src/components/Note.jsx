import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteData, setNoteData] = useState({
    title: props.title,
    content: props.content,
  });

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleEdit() {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      props.onChange(props.id, noteData); // Call the update function
    }
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input name="title" value={noteData.title} onChange={handleChange} />
          <textarea
            name="content"
            value={noteData.content}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <h1>{noteData.title}</h1>
          <p>{noteData.content}</p>
        </>
      )}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}

export default Note;

