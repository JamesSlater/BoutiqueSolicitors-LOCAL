import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ScrollHideDirective } from '../../directives/scroll-hide.directive';
import { AboutPage } from './about.page';
const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardPageModule' 
  },
  {
    path: 'contact',
    loadChildren: '../contact/contact.module#ContactPageModule' 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPage, ScrollHideDirective]
})
export class AboutPageModule {}
