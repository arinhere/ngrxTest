import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import { Observable } from 'rxjs';
import { TestService } from '../../core/services/test.services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: Array<any>=[];
  constructor(private _userService: TestService, private _router: Router, private _snack: MatSnackBar) { }

  ngOnInit() {
    this.populateUsers();
  }

  populateUsers(){
    this._userService.getData()
      .subscribe(result=>{
        this.users=Object.values(result);
      })
  }

  userDetail: any;
  navigate(action,id){
    if(action=='view'){
      this._userService.getDataByID(id)
        .subscribe(result=>{
          this.userDetail=result;
        })
    }

    if(action=='edit'){
      this._router.navigate(['/user/' + id + '/edit']);
    }

    if(action=='delete'){
      if(confirm('Are you sure to remove this user?')){
        this._userService.deleteData(id)
          .subscribe(result=>{
            this.openSnackBar("User has been deleted","Success");
            this.users=[];
            this.userDetail=null;
            this.populateUsers();
          },
          err=>{
            this.openSnackBar("Unable to delete user","error");
          })
      }
    }

  }

  openSnackBar(message,action){
    this._snack.open(message, action, {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
    });
  }


}
