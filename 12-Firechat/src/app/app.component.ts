import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';
  chats: Observable<any[]>;

  constructor(firedb: AngularFirestore) {
    this.chats = firedb.collection('chats').valueChanges();
    
  }
}
