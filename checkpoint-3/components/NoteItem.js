"use client";
import Link from "next/link";
 
export default function NoteItem({ note, onDelete }) {
  return (
<div className="p-4 border rounded shadow mb-2 bg-white border-black mx-100">
<h3 className="font-bold text-black">{note.title}</h3>
<p className=" text-black">{note.content.substring(0, 50)}...</p>
<p className="text-xs text-gray-500">Criado em: {note.createdAt}</p>
<div className="flex gap-2 mt-2">
<Link href={`/notes/${note.id}`} className="text-blue-600 cursor-pointer">
          Ver detalhes
</Link>
<button onClick={() => onDelete(note.id)} className="text-red-600 cursor-pointer">
          Excluir
</button>
</div>
</div>
  );
}
 