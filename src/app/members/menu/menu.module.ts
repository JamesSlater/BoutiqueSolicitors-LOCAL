import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      { path: 'news', loadChildren: '../news/news.module#NewsPageModule' },
      { path: 'news/:id', loadChildren: '../post/post.module#PostPageModule' },
      { path: 'services', loadChildren: '../services/services.module#ServicesPageModule' },
      { path: 'servicedetails/:item', loadChildren: '../servicedetails/servicedetails.module#ServicedetailsPageModule' },

      { path: 'team', loadChildren: '../team/team.module#TeamPageModule' },
      { path: 'bill', loadChildren: '../bill/bill.module#BillPageModule' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },

      { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' } 
    ]

  },{
    path: '',
    redirectTo: 'menu/dashboard'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
