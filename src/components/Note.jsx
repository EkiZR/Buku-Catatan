import React from "react";

const Note = ({ note, deleteNote, archiveNote }) => {
  const archiveText = note.archived ? "Unarsipkan" : "Arsipkan";

  return (
    <div className="Note">
      <h3 className="TitleNote">{note.title}</h3>
      <p className="TanggalNote">{note.createdAt}</p>
      <p className="IsiNote">{note.body}</p>

      <div className="ButtonNote">
        <button onClick={() => deleteNote(note.id)}>Hapus</button>
        <button onClick={() => archiveNote(note.id)}>
          {archiveText}
        </button>
      </div>
    </div>
  );
};

export default Note;
