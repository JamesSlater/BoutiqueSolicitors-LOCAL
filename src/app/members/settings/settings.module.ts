import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from '@ionic/angular';

import { SettingssPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingssPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [TranslateModule],
  declarations: [SettingssPage]
})
export class SettingssPageModule {}
