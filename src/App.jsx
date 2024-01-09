import React, { useState, useEffect } from "react"
import NoteList from "./components/NoteList"
import NoteForm from "./components/NoteForm"
import { getInitialData } from "./utils"

const App = () => {
	// Mendapatkan data awal dari localStorage atau fungsi getInitialData jika tidak ada data di localStorage
	const initialNotes = JSON.parse(localStorage.getItem("notes")) || getInitialData()

	const [notes, setNotes] = useState(initialNotes)
	const [searchTerm, setSearchTerm] = useState("")

	// Menyimpan data ke localStorage setiap kali terjadi perubahan pada notes
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes))
	}, [notes])

	// Fungsi untuk menambah catatan baru
	const addNote = (newNote) => {
		setNotes([...notes, newNote])
	}

	// Fungsi untuk menghapus catatan
	const deleteNote = (id) => {
		const updatedNotes = notes.filter((note) => note.id !== id)
		setNotes(updatedNotes)
	}

	// Fungsi untuk mengarsipkan/catatatan
	const archiveNote = (id) => {
		const updatedNotes = notes.map((note) =>
			note.id === id ? { ...note, archived: !note.archived } : note,
		)
		setNotes(updatedNotes)
	}

	// Mencari catatan yang sesuai dengan kata kunci pencarian
	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	// Memisahkan catatan yang sudah diarsipkan dan yang belum diarsipkan
	const archivedNotes = filteredNotes.filter((note) => note.archived)
	const activeNotes = filteredNotes.filter((note) => !note.archived)

	return (
		<div>
			<nav>
				<h1>Buat Catatan</h1>

				<div class="input-container">
					<input
						type="text"
						placeholder="Cari catatan..."
						value={searchTerm}
						className="input"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" class="icon">
						<g stroke-width="0" id="SVGRepo_bgCarrier"></g>
						<g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
						<g id="SVGRepo_iconCarrier">
							{" "}
							<rect fill="white" height="24" width="24"></rect>{" "}
							<path
								fill=""
								d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
								clip-rule="evenodd"
								fill-rule="evenodd"></path>{" "}
						</g>
					</svg>
				</div>

				{/*  Dekstop */}
				{/* 	<div className="search">
					<div className="search-box">
						<div className="search-field">
							<input
								type="text"
								placeholder="Cari catatan..."
								value={searchTerm}
								className="input"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<div className="search-box-icon">
								<button className="btn-icon-content">
									<i className="search-icon">
										<svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512">
											<path
												d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
												fill="#fff"></path>
										</svg>
									</i>
								</button>
							</div>
						</div>
					</div>
				</div> */}
				{/*  */}
			</nav>

			<NoteForm addNote={addNote} />
			{activeNotes.length ? (
				<div className="Catatan">
					<h2>Catatan</h2>
					<br />
					<br />
					<NoteList notes={activeNotes} deleteNote={deleteNote} archiveNote={archiveNote} />
				</div>
			) : (
				<p>Tidak ada catatan</p>
			)}
			{archivedNotes.length ? (
				<div className="ArsipCatatan">
					<br />
					<h2>Catatan Terarsipkan</h2>
					<br />
					<br />
					<NoteList notes={archivedNotes} deleteNote={deleteNote} archiveNote={archiveNote} />
				</div>
			) : null}

			
		</div>
	)
}

export default App
