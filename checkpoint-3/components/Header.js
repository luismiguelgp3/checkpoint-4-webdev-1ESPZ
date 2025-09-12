import Link from 'next/link'
 
export default function Header() {
  return (
<header className="bg-blue-600 text-white py-3 px-6 shadow mb-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<h1 className="text-lg font-semibold flex items-center gap-2">
<span>🗒️</span> App de Anotações
</h1>
<Link href="/" className="hover:underline">Início</Link>
</div>
</header>
  )
}
 