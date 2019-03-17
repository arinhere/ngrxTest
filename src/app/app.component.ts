import { Component } from '@angular/core';
import { TestService } from './core/services/test.services';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  
  constructor(){
  }

  ngOnInit(){
  }

}
