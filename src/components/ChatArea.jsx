import { useState } from 'react'
import { Menu, Send } from 'lucide-react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export default function ChatArea({ isSidebarOpen, setIsSidebarOpen }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Persona1', content: 'Hola, ¿cómo estás?' },
    { id: 2, sender: 'Tu', content: '¡Hola! Estoy bien, gracias. ¿Y tú?' },
    { id: 3, sender: 'Persona1', content: 'Todo bien por aquí. ¿Qué planes tienes para hoy?' },
  ])

  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'Tu', content: newMessage }])
      setNewMessage('')
    }
  }

  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-80' : 'ml-0'}`}>
      <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
        {!isSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-full hover:bg-gray-200">
            <Menu className="h-6 w-6" />
          </button>
        )}
        <h2 className="text-lg font-semibold">Persona</h2>
      </div>
      <ScrollArea.Root className="flex-grow overflow-y-auto">
        <ScrollArea.Viewport className="w-full h-full p-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === 'Tu' ? 'text-right' : ''}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'Tu' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <p>{message.content}</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">{message.sender}</p>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="p-4 border-t flex">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-grow mr-2 p-2 border rounded-lg"
        />
        <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}