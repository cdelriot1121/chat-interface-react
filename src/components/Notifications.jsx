import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { ScrollArea } from "@/components/ui/scroll-area"
  import { Bell, MessageSquare, UserPlus } from 'lucide-react'
  
  export default function Notifications({ open, onOpenChange }) {
    const notifications = [
      {
        id: 1,
        type: 'message',
        content: 'Nuevo mensaje de persona',
        time: '2 min ago',
        icon: MessageSquare //mensajesquare icono
      },
      {
        id: 2,
        type: 'friend',
        content: 'Persona quiere contactar contigo',
        time: '1 hour ago',
        icon: UserPlus //usuarios o amigos iconos
      },
      {
        id: 3,
        type: 'alert',
        content: 'Nueva actualización disponible',
        time: '2 hours ago',
        icon: Bell //icono para notificaciones del sistema o alertas
      },
    ]
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notificaciones</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent cursor-pointer"
                >
                  <div className="rounded-full p-2 bg-primary/10">
                    <notification.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.content}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }  