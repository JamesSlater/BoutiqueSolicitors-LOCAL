import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AboutPageModule } from '../about/about.module'
import { DashboardPage } from './dashboard.page';
import { AboutPage } from '../about/about.page';

const routes: Routes = [
  { path: '',
    component: DashboardPage,
    children: []
  },

      

  {
    path: 'dashboard',
    redirectTo: ''
  },
  // {
  //   path: 'about',
  //   redirectTo: 'members/menu/about'
  // },
  // {
  //   path: 'contact',
  //   redirectTo: 'members/menu/contact'
  // }

      

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}