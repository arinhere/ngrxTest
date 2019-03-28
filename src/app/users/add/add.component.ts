import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../core/services/test.services';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddUserComponent implements OnInit {
  userid="";
  addUserForm: FormGroup;
  tags: Array<any>=[
    {name: 'Work', value: 'Work'},
    {name: 'Paris', value: 'Paris'},
    {name: 'daycare', value: 'daycare'},
    {name: 'Store', value: 'Store'},
    {name: 'Friend', value: 'Friend'},
    {name: 'Neighbour', value: 'Neighbour'}
  ];

  constructor(private fb: FormBuilder, private _userService: TestService, private _router: Router, private _snack: MatSnackBar, private _route: ActivatedRoute) { }

  ngOnInit() {
    //Creating Reactive form
    this.addUserForm=this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      number: ['', Validators.required],
      tags: ['']
    })

    //Check if there is any ID in the param, then it will for edit purpose
    this._route.params.subscribe((params:Params)=>{
      if(params['id']){
        this.userid = params['id'];  //Getting data

        //Getting data from API & assign them
        this._userService.getDataByID(this.userid)
        .subscribe(result=>{
          this.addUserForm.get('name').setValue(result[0].name);
          this.addUserForm.get('email').setValue(result[0].email);
          this.addUserForm.get('number').setValue(result[0].number);
          this.addUserForm.get('tags').setValue(result[0].tags);
        })

      }
    })

  }

  //Get the form controls for validation
  get f(){return this.addUserForm.controls}

  onSubmit(formVal){
    if(!this.userid){//Submit data if its for adding user
      this._userService.postData(formVal.value)
      .subscribe(result=>{
        this.openSnackBar("User has been created",'success')
        setTimeout(() => {
          this._router.navigate(['/user/list']);
        }, 1000);        
      },
      err=>{//Error reporting
        this.openSnackBar("Unable to save data",'error')
      })
    }
    else{//Submit data if its for edit user
      var body=formVal.value;
      body['id']=this.userid;

      this._userService.updateData(body)
      .subscribe(result=>{
        this.openSnackBar("User has been updated",'success')
        setTimeout(() => {
          this._router.navigate(['/user/list']);
        }, 1000);        
      },
      err=>{
        this.openSnackBar("Unable to save data",'error')
      })
    }
    
  }

  //Snack bar to display messages
  openSnackBar(message,action){
    this._snack.open(message, action, {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
    });

    this.addUserForm.reset('');
  }

}
