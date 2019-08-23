import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

interface Product {
  name: string,  
  description: string,
  quantity: number
}

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
rng: any;
products: Observable<Product[]>;
productsCollectionRef: AngularFirestoreCollection<Product>;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.productsCollectionRef = this.afs.collection('products'); 
    this.products = this.productsCollectionRef.valueChanges();
  }

  ngOnInit() {
  //  this.rng = Math.random() * 200000 - CHAT PIN RANDOMISATION TESTING
  //  this.rng = Math.floor(this.rng)
  //  this.createProduct("Tablet", "A portable computer, great for freelancers", 12) - Adding to the product collection

  }

  createProduct(name: string, description: string, quantity: number) {

    this.productsCollectionRef.add({ name: name, description: description, quantity: quantity });

  }

  checkSpeed(speed) {  
      while (speed > 70) {
        speed -= 70
        if (speed / 5)
        return "1 point"
        if (speed <= 10)
        return "2 points"
      }

    }
  


}