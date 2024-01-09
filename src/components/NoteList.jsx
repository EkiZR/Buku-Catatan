import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote, archiveNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
        />
      ))}
    </div>
  );
};

export default NoteList;


