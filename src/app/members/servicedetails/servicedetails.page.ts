import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.page.html',
  styleUrls: ['./servicedetails.page.scss'],
})
export class ServicedetailsPage implements OnInit {

title;
description;
  constructor(private modalController: ModalController) {

   }

  ngOnInit() {
  }
  

  closeModal() {
    this.modalController.dismiss();
  }

}
