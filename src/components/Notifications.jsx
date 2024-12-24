import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Notifications() {
  const navigate = useNavigate()
  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'Nuevo mensaje de John Doe',
      time: '2 min ago',
      read: false
    },
    {
      id: 2,
      type: 'system',
      content: 'Tu perfil ha sido actualizado',
      time: '1 hour ago',
      read: true
    },
    {
      id: 3,
      type: 'message',
      content: 'Jane Smith te ha enviado una solicitud de chat',
      time: '2 hours ago',
      read: true
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
            <h2 className="text-lg font-semibold ml-2">Notificaciones</h2>
          </div>
          <div className="divide-y">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <p className={`${!notification.read ? 'font-semibold' : ''}`}>
                    {notification.content}
                  </p>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

