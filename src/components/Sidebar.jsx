import { useState } from 'react'
import { ChevronLeft, Settings, Bell, Archive, LogOut } from 'lucide-react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar'

export default function Sidebar({ isOpen, setIsOpen }) {
  const [chats, setChats] = useState([
    { id: 1, name: 'Persona1', lastMessage: 'Ultimo Mensaje' },
    { id: 2, name: 'Persona2', lastMessage: 'Ultimo Mensaje' },
    { id: 3, name: 'Persona3', lastMessage: 'Ultimo Mensaje' },
  ])

  return (
    <div className={`bg-white w-80 flex flex-col transition-all duration-300 ease-in-out fixed top-0 left-0 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Chats</h2>
        <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-200">
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
      <ScrollArea.Root className="flex-grow">
        <ScrollArea.Viewport className="w-full h-full">
          {chats.map((chat) => (
            <div key={chat.id} className="p-4 hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center space-x-4">
                <Avatar.Root className="w-10 h-10 rounded-full bg-gray-300">
                  <Avatar.Image src={`https://api.dicebear.com/6.x/initials/svg?seed=${chat.name}`} />
                  <Avatar.Fallback>{chat.name.split(' ').map(n => n[0]).join('')}</Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="p-4 border-t">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="w-full flex items-center p-2 rounded-lg hover:bg-gray-100">
              <Avatar.Root className="w-8 h-8 rounded-full bg-gray-300 mr-2">
                <Avatar.Image src="https://avatars.githubusercontent.com/u/137203832?v=4" />
                <Avatar.Fallback>CN</Avatar.Fallback>
              </Avatar.Root>
              <span>Tu Nombre</span>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-2 w-56">
              <DropdownMenu.Label className="px-2 py-1 text-sm font-semibold">Mi cuenta</DropdownMenu.Label>
              <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
              <DropdownMenu.Item className="px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 rounded flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferencias</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 rounded flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span>Notificaciones</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 rounded flex items-center">
                <Archive className="mr-2 h-4 w-4" />
                <span>Chats archivados</span>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
              <DropdownMenu.Item className="px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 rounded flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}