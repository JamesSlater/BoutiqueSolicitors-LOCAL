import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
pin: any;
uid;
pinRef;
// pins: Observable<ChatPin[]>;
// pinsCollectionRef: AngularFirestoreCollection<ChatPin>;
  constructor(private router: Router, private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.uid = afAuth.auth.currentUser.uid;
    this.pinRef = this.afs.collection('chatpins/' + this.uid + '/pin')

  }

  // pins: Observable<ChatPin>

  ngOnInit() {
  }


  // this.storage.ref(`users/` + this.uid + `/friends/`)

  settings() {
    this.router.navigate(['members/profile'])
  }

  chatroom() {
    this.router.navigate(['members/chatroom'])
  }

  connections() {
    this.router.navigate(['members/connections'])
  }

  add() {
    console.log('add')
  }

  chats() {
    console.log('chats')
  }
}