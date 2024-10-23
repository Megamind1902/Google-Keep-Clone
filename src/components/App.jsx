import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  function changeNote(id, updatedNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[id] = updatedNote; // Update the specific note
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index} // Consider using unique IDs if available
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onChange={changeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

