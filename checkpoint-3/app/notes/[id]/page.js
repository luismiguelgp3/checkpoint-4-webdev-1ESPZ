"use client";
import { useParams, useRouter, useSearchParams } from 'next/navigation';
const NoteDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
 
  const note = {
    id: parseInt(params.id),
    titulo: searchParams.get('titulo'),
    conteudo: searchParams.get('conteudo'),
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Detalhes da Anotação</h1>
            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded"
            >
              ← Voltar
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Titulo</label>
              <p className="text-gray-900">{note.titulo}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Conteudo</label>
              <p className="text-gray-900">{note.conteudo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;
 
 