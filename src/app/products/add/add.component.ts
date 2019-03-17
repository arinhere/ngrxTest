import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  constructor(private fb: FormBuilder, private _product: ProductService) { }

  ngOnInit() {
    this.addProductForm=this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: ['', Validators.required]
    })
  }

  //Get the form controls for validation
  get f(){return this.addProductForm.controls}

  onSubmit(formVal){
    this._product.addProduct(formVal.value)
      .subscribe(result=>{
        console.log(result);
      })
  }

}
