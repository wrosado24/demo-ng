import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../model/account.model';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit, OnDestroy {

  accountForm: FormGroup;
  obj: any;

  constructor(private accountService: AccountService, private router:Router) {

    const jsonStorage = localStorage.getItem('json');

    if(jsonStorage != null){
      this.obj = JSON.parse(jsonStorage);
    }
    
    this.accountForm = new FormGroup({
      name: new FormControl(this.obj.name),
      email: new FormControl(this.obj.email),
      password: new FormControl(this.obj.password)
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    localStorage.clear();
  }

  async update(){
    await this.accountService.updateAccount(this.accountForm.value);
  }

  cancel(){
    this.router.navigate(['account/list']);
  }

}
