import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ScrollHideConfig } from '../../directives/scroll-hide.directive'
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate(['members/menu/dashboard'])
  }

  contact() {
    this.router.navigate(['members/menu/contact'])
  }
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 0 };
}
