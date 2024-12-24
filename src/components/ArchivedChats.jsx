import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ArchivedChats() {
  const navigate = useNavigate()
  const archivedChats = [
    {
      id: 1,
      name: 'Proyecto Antiguo',
      lastMessage: 'Gracias por todo el trabajo',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Grupo Vacaciones 2023',
      lastMessage: 'Fue un viaje increíble',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Soporte Técnico',
      lastMessage: 'Tu ticket ha sido resuelto',
      date: '2 months ago'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex items-center">
            <button 
              onClick={() => navigate('/chat')}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold ml-2">Chats Archivados</h2>
          </div>
          <div className="divide-y">
            {archivedChats.map((chat) => (
              <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{chat.name}</h3>
                    <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                  </div>
                  <span className="text-xs text-gray-500">{chat.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

