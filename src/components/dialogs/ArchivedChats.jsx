import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as Avatar from '@radix-ui/react-avatar'

export default function ArchivedChats({ isOpen, onClose }) {
  const archivedChats = [
    {
      id: 1,
      name: 'Proyecto Antiguo',
      lastMessage: 'Gracias por todo el trabajo',
      date: '15/12/2023'
    },
    {
      id: 2,
      name: 'Grupo Vacaciones',
      lastMessage: 'Nos vemos el próximo año',
      date: '01/12/2023'
    },
    {
      id: 3,
      name: 'Soporte Técnico',
      lastMessage: 'Problema resuelto',
      date: '28/11/2023'
    }
  ]

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96 max-h-[85vh] overflow-y-auto">
          <Dialog.Title className="text-xl font-semibold mb-4">
            Chats Archivados
          </Dialog.Title>
          <div className="space-y-4">
            {archivedChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <Avatar.Root className="w-10 h-10 rounded-full bg-gray-300">
                  <Avatar.Image
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${chat.name}`}
                  />
                  <Avatar.Fallback>
                    {chat.name.split(' ').map(n => n[0]).join('')}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="flex-1">
                  <h3 className="font-medium">{chat.name}</h3>
                  <p className="text-sm text-gray-600">{chat.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-500">{chat.date}</span>
              </div>
            ))}
          </div>
          <Dialog.Close className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
            <X className="w-4 h-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

