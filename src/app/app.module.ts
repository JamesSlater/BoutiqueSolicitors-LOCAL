import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPageModule } from './public/login/login.module';
import { EmailPageModule } from  './members/email/email.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServicedetailsPageModule } from '../app/members/servicedetails/servicedetails.module'
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { LanguageComponent } from './component/language/language.component';
import { EmojiPickerComponent } from './component/emoji-picker/emoji-picker.component'
// import { GifComponent } from './component/gif/gif.component'
import { ImageViewerComponent } from './component/image-viewer/image-viewer.component'
import { LocationComponent } from './component/location/location.component'

//Plugins
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, AlertController } from '@ionic/angular';
import { environment } from '../environments/environment';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { File } from "@ionic-native/file/ngx";
import { FCM } from '@ionic-native/fcm/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { Network } from '@ionic-native/network/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
//Firebase
import * as firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [AppComponent, LanguageComponent, EmojiPickerComponent, ImageViewerComponent, LocationComponent],
  entryComponents: [],
  imports: [
    LoginPageModule,
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    EmailPageModule,
    ServicedetailsPageModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
   ],
  providers: [
    ModalController,
    AlertController,
    CallNumber,
    StatusBar,
    AngularFireDatabase, 
    Camera,
    StreamingMedia,
    Geolocation,
    File,
    SocialSharing,
    FCM,
    MediaCapture,
    VideoEditor,
    AppRate,
    FileChooser,
    Network,
    FilePath,
    SpinnerDialog,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}