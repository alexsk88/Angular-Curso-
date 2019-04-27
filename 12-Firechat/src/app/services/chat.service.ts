import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Aqui vamos a colocar una arreglo de char para no ulitizar async 
  // de firebase  wowowo

  public chat: any [] = []

  // Esto ya lo hemos utilizado hay que traer una referencia 
  // para traer los datos de
  private itemDoc: AngularFirestoreCollection<any>;

  constructor(private firedb: AngularFirestore) 
  {
  }

  cargarMensajes()
  {  
    // Referencia obligatoria para traer data de firebase
    // OJO con las collection and Documents, it is difently
    this.itemDoc = this.firedb.collection<any>('chats');

    // Retorno la data de firebase, esto es una promesa
    // lo que significa que hay que susucribirse
    return this.itemDoc.valueChanges();
  }
}
