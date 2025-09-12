"use client";
import { useState } from "react";
 
export default function NotesForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd(title, content);
    setTitle("");
    setContent("");
  };
 
  return (
    <form onSubmit={handleSubmit} className="p-9 mx-100 bg-white shadow rounded">
      <h2 className="font-bold mb-2 text-black text-2xl">Nova Anotação</h2>
      <label className="block text-lg font-medium mb-1 text-black">Titulo</label>
      <input
        name="titulo"
        type="text"
        placeholder="Digite o título..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full mb-7 p-2 rounded text-black"
      />
      <label className="block text-lg font-medium mb-1 text-black">Conteudo</label>
      <textarea
        name="conteudo"
        placeholder="Digite o conteúdo..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border w-full mb-2 p-2 rounded text-black"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Criar Anotação
      </button>
    </form>
  );
}
 