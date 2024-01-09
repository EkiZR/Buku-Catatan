import React, { useState } from "react";
import { showFormattedDate } from "../utils";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const MAX_TITLE_LENGTH = 50;

  const handleTitleChange = (e) => {
    const { value } = e.target;
    if (value.length <= MAX_TITLE_LENGTH) {
      setTitle(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi agar title dan body tidak boleh kosong sebelum mengirimkan catatan
    if (!title.trim() || !body.trim()) {
      alert('Judul dan Isi catatan harus diisi!');
      return;
    }

    const currentDate = showFormattedDate(new Date());
    addNote({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: currentDate,
    });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="FormNote">
      <input
        type="text"
        placeholder="Judul"
        value={title}
        className="InputNote"
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Isi catatan..."
        value={body}
        className="TextareaNote"
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" className="ButtonTambahNote">
        TAMBAH CATATAN
      </button>
    </form>
  );
};

export default NoteForm;
