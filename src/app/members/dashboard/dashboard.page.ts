import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
error = this.error; 

// profilePic = firebase.storage.child(`users/` + this.uid + `/profilePic`)
 
  constructor(private router: Router, public afAuth: AngularFireAuth, public storage: AngularFireStorage) { }
 
  ngOnInit() {
    this.getProfilePhoto()
  }

  uid = this.afAuth.auth.currentUser.uid;
  profilePic;
  getProfilePhoto() {
  this.storage.ref(`users/` + this.uid + `/profilePic`).getDownloadURL().toPromise().then((url)=>{
    this.profilePic = url;
  })

}
 
  logout() {
    this.router.navigate(['login']);

    // this.authService.logout();
  }

  search() {
    this.router.navigate(['members/menu/services']);
  }

  news() {
    this.router.navigate(['members/menu/news']);
  }

  bill() {
    this.router.navigate(['members/menu/bill']);
  }
  contact() {
    this.router.navigate(['members/menu/contact'])
  }

  about() {
    this.router.navigate(['members/menu/about'])
  }

  settings() {
    this.router.navigate(['members/profile'])
  }
  test() {
    this.router.navigate(['members/test'])
  }
}