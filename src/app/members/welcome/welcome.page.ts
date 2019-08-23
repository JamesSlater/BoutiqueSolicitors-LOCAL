import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
  
}

export interface ChatPin {
  pin: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
firstName;
rng;
uid;
pin;
pins: Observable<ChatPin[]>;
pinsCollectionRef: AngularFirestoreCollection<ChatPin>;

  // Upload Task 
  task: AngularFireUploadTask;
 
  // Progress in percentage
  percentage: Observable<number>;
 
  // Snapshot of uploading file
  snapshot: Observable<any>;
 
  // Uploaded File URL
  UploadedFileURL: Observable<string>;
 
  //Uploaded Image List
  images: Observable<MyData[]>;
 
  //File details  
  fileName:string;
  fileSize:number;
 
  //Status check 
  isUploading:boolean;
  isUploaded:boolean;
 
  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.uid = afAuth.auth.currentUser.uid;
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('profilePic');
    this.images = this.imageCollection.valueChanges();
    this.pinsCollectionRef = this.database.collection('chatpins/' + this.uid + '/pin')
    this.pins = this.pinsCollectionRef.valueChanges();
  }
   ngOnInit() {
     
    this.rng = Math.random() * 200000
    this.rng = Math.floor(this.rng)
    this.pin = this.rng;  
    
    // this.uploadFile(JSON.stringify(this.pin));
    this.createPin(JSON.stringify(this.pin))
    
  }

  createPin(pin: string) {

    this.pinsCollectionRef.add({ pin: pin });

  }
 
  uploadFile(event: FileList) {
    
 
    // The File object
    const file = event.item(0)
 
    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }
 
    this.isUploading = true;
    this.isUploaded = false;
 
 
    this.fileName = file.name;
 
    // The storage path
    // const path = `profilePic/${new Date().getTime()}_${file.name}`;
    const path = `users/` + this.uid + `/profilePic`;

 
    // Totally optional metadata
    const customMetadata = { app: 'Profile Image Upload Demo' };
 
    //File reference
    const fileRef = this.storage.ref(path);
 
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
  
 
    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }
 
  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();
 
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  UpdateProfile() {
    // this.afAuth.auth.currentUser.displayName = this.firstName;
    this.afAuth.auth.currentUser.updateProfile({displayName: this.firstName})
    // this.navCtrl.navigateForward('members/menu/dashboard')
    this.router.navigate(['members/menu/dashboard'])
  }

}