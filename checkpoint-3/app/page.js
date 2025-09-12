"use client";
 
import { useState, useEffect } from "react";
import NotesForm from "@/components/NotesForm";
import NotesList from "@/components/NotesList";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
 
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    console.log("Notas atualizadas:", notes);
  }, [notes]);
 
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };
 
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
 
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div className="space-y-4">
      <Header></Header>
      <NotesForm onAdd={addNote} />
      <SearchBar search={search} setSearch={setSearch} />
      <NotesList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
}
 
