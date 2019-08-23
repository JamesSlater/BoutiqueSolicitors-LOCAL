import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: ' ‏‏‎ ' + 'Dashboard',
      url: '/members/menu/dashboard',
      icon: 'home'
    },
    {
      title: ' ‏‏‎ ' + 'About us',
      url: '/members/menu/about',
      icon: 'information-circle-outline'
    },
    {
      title: ' ‏‏‎ ' + 'Contact us',
      url: '/members/menu/contact',
      icon: 'contacts'
    },   
    {
      title: ' ‏‏‎ ' + 'Services',
      url: '/members/menu/services',
      icon: 'search'
    },
    {
      title: ' ‏‏‎ ' + 'News',
      url: '/members/menu/news',
      icon: 'paper'
    },
    {
      title: ' ‏‏‎ ' + 'Pay a bill',
      url: '/members/menu/bill',
      icon: 'cash'
    },
    {
      title: ' ‏‏‎ ' + 'Team',
      url: '/members/menu/team',
      icon: 'construct'
    },
    // {
    //   title: ' ‏‏‎ ' + 'Chat',
    //   url: '/members/menu/chat',
    //   icon: 'chatboxes'
    // }


  ];

  selectedPath = '';
  constructor(private router: Router, public afAuth: AngularFireAuth, private navCtrl: NavController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
      this.selectedPath = event.url;
      }
    })
  }


  ngOnInit() {
  }

  logout() {
   let res = this.afAuth.auth.signOut().then(() => {
      console.log('signed out')
      console.log(res)
      this.navCtrl.navigateBack('/login')
    });
    }
  }



