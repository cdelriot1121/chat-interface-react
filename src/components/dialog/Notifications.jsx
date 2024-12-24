import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export default function Notifications({ isOpen, onClose }) {
  const notifications = [
    {
      id: 1,
      title: 'Nuevo mensaje',
      message: 'Has recibido un nuevo mensaje de Persona',
      time: '2 min ago'
    },
    {
      id: 2,
      title: 'Solicitud de amistad',
      message: 'Persona quiere solicitar hablar contigo',
      time: '1 hora ago'
    },
    {
      id: 3,
      title: 'Recordatorio',
      message: 'Mensaje que tienes que leer',
      time: '2 horas ago'
    }
  ]

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96 max-h-[85vh] overflow-y-auto">
          <Dialog.Title className="text-xl font-semibold mb-4">
            Notificaciones
          </Dialog.Title>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
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