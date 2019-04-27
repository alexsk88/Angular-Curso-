import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit 
{

  mensaje: string = '';

  constructor(public chatservice: ChatService)
  {
    this.chatservice.cargarMensajes()
        .subscribe((mensajes: any[]) => {
          console.log(mensajes);

          // Me quede en el 206
        })
  }

  ngOnInit() 
  {
  }

  enviar_mensaje()
  {
    console.log(this.mensaje);
    
  }
}
