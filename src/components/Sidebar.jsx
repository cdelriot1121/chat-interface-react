import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Settings, Bell, Archive, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Preferences from './Preferences'
import Notifications from './Notifications'
import ArchivedChats from './ArchivedChats'

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate()
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [archivedChatsOpen, setArchivedChatsOpen] = useState(false)
  
  const [chats, setChats] = useState([
    { id: 1, name: 'Persona1', lastMessage: 'Ultimo Mensaje' },
    { id: 2, name: 'Persona2', lastMessage: 'Ultimo Mensaje' },
    { id: 3, name: 'Persona3', lastMessage: 'Ultimo Mensaje' },
  ])

  const handleLogout = () => {
    navigate('/')
  }
  return (
    <>
      <div className={`bg-card text-card-foreground w-80 flex flex-col transition-all duration-300 ease-in-out fixed top-0 left-0 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex-shrink-0`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Chats</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          {chats.map((chat) => (
            <div key={chat.id} className="p-4 hover:bg-accent cursor-pointer">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${chat.name}`} />
                  <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Tu Nombre</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setPreferencesOpen(true)}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Preferencias</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setNotificationsOpen(true)}>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notificaciones</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setArchivedChatsOpen(true)}>
                <Archive className="mr-2 h-4 w-4" />
                <span>Chats archivados</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Preferences 
        open={preferencesOpen} //para llamar a las propiedades
        onOpenChange={setPreferencesOpen} 
      />
      <Notifications 
        open={notificationsOpen} 
        onOpenChange={setNotificationsOpen} 
      />
      <ArchivedChats 
        open={archivedChatsOpen} 
        onOpenChange={setArchivedChatsOpen} 
      />
    </>
  )
}