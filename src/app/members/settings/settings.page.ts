import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingssPage implements OnInit {

  options = [
    {
      language: "ENGLISH",
      value: "en"
    },
    {
      language: "FRENCH",
      value: "fr"
    }
  ];
  public file: any = {};
  value: any;

  constructor(
    public translate: TranslateService,
    public events: Events) { 
      let value = localStorage.getItem("language");
      this.value = value != null ? value : "en";
      this.translate.setDefaultLang("en");
    }

  ngOnInit() {
  }

  changeLanguage() {
    localStorage.setItem("language", this.value);
    if (this.value == "fr") {
      this.translate.use("fr");
    } else {
      this.translate.use("en");
    }
  }


}





