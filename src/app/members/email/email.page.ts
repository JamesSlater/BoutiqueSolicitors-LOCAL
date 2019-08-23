import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
email;
message;
sendEmail;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeEmail(){
    this.modalController.dismiss();
  }
}
