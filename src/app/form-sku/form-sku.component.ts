import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
  formProduct: FormGroup;

  constructor(fb: FormBuilder) {
    this.formProduct = fb.group({
      'sku': ['', Validators.required]
    });
  }

  onSubmit(form: any): void {
    console.log(form);
  }

  ngOnInit() {
  }

}
