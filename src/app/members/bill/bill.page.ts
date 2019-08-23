import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
billing : FormGroup
  constructor(private formBuilder: FormBuilder) { 
    this.billing = this.formBuilder.group({
      select: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      postCode: ['', Validators.required],
      email: ['', Validators.required],
      teleNo: ['', Validators.required],
      accNo: ['', Validators.required],
      invNo: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.billing.value);
  }

}
