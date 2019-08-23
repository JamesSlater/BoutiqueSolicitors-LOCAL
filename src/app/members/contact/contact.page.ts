import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController, AlertController } from '@ionic/angular';
import { EmailPage } from '../email/email.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private router: Router, private callNumber: CallNumber, private alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {
  }

  about() {
    console.log('clicked about')
    this.router.navigate(['members/menu/about'])
  }

  dashboard() {
    console.log('clicked dashboard')

    this.router.navigate(['members/menu/dashboard'])
  }

  async callAlert() {
    console.log('method executed')
    const callAlert = await this.alertController.create({
      message: "Are you sure you want to call Boutique Solicitors?",
      buttons: [{
        text: "Cancel",
        role: "cancel"

      },
      {
        text: "Call",
        handler: () => {this.callBS()}
      }
    ]
    });
    callAlert.present()

  }

  async callBS() {
    
    this.callNumber.callNumber("07847948252", false)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err))
  }

  async modalEmail() {
    const modal = await this.modalController.create ({
      component: EmailPage
    });
    modal.present();
  }

}
