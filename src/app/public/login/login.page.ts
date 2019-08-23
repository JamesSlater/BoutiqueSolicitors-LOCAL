import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';

let _this
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "slaterfps@gmail.com"
  pass: string = "admin1"
  // email: string = "ozele.okonta@theaccesspoint.co.uk"
  // pass: string = "accesspoint"
  // email: string = "a@guest.com";
  // pass: string = "testing";
  // email: string = "adam.brookner@theaccesspoint.co.uk"
  // pass: string = "4206969"
  // email: string = "gary.shaw@theaccesspoint.co.uk";
  // pass: string = "accesspoint"
  error = this.error = "";
  constructor(public afAuth: AngularFireAuth, private router: Router, private navCtrl: NavController, private toastController: ToastController) {
    _this = this;
  }

  ngOnInit()
  {

  }


  async login() {

    const { email, pass } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)

       console.log(res)
       this.error = ""
       this.afAuth.auth.onAuthStateChanged(function(user){

        if (user.displayName){
      _this.navCtrl.navigateForward('/members/menu/dashboard');

        }
        else {
      _this.navCtrl.navigateForward('/members/welcome');
        }
      });
    } catch(err) {
      console.dir(err)
      if (err.code == "auth/invalid-email"){
        this.error = "Invalid email address"
      }
      else if (err.code == "auth/wrong-password"){
        this.error = "Invalid password"
      }
      else if (err.code == "auth/user-not-found"){
        this.error = "This email is not registered with us"
      }

      }
    }

    async help() {
      const toast = await this.toastController.create({
        header: 'Trouble logging in?',
        message: 'Contact us admin@boutiquesolicitors.com or call us on 0800 3881 0211',
        duration: 10000,
        position: "middle",
        animated: true,
        translucent: false,
        // closeButtonText: "OK",
        buttons: [
          {
          text: 'OK',
          role: 'cancel'
          }
        ],
        cssClass: "toast"
      });
      toast.present();
    }
  }