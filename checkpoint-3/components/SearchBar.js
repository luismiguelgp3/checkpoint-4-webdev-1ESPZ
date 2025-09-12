"use client";
 
export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar anotações..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border mx-100 p-3 mb-12 text-black rounded bg-white"
    />
  );
}