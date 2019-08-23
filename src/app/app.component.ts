import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core"; 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // rootPage:any = 'LoginPage';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private translateService: TranslateService
  ) {
    // this.initializeApp();x
  }
 
  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   })
  // }
 
  private useTranslateService() {
    let value = localStorage.getItem("language");
    let language = value != null ? value : "en";
    this.translateService.use(language);
  }

  ngOnInit() {
    this.useTranslateService();
  }
  //     this.authenticationService.authenticationState.subscribe(state => {
  //       if (state) {
  //         this.router.navigate(['members', 'dashboard']);
  //       } else {
  //         this.router.navigate(['login']);
  //       }
  //     });
 
//     });
//   }
  }