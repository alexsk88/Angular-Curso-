import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaimagenesService {

  // Asi se va a llamar la carpeta en firebase donde se van
  // a guardar las images
  private IMAGES_FOLD = 'img';

  constructor(private db: AngularFirestore)
  {

  }

  cargarimganes(imagnes: FileItem[]){

  }

  private saveImages( imagen: {nombre: string, url: string} )
  {
    this.db.collection(`/${this.IMAGES_FOLD}`)
        .add( imagen );
  }
}
