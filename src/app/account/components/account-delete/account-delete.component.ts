import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit, OnDestroy {

  name: string;
  email: string;
  obj: any;

  constructor(private router: Router, private accountService: AccountService) { 
    const jsonStorage = localStorage.getItem('json');

    if(jsonStorage != null){
      this.obj = JSON.parse(jsonStorage);
    }

    this.name = this.obj.name;
    this.email = this.obj.email;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    localStorage.clear();
  }

  async deleteAccount(){
    await this.accountService.deleteAccount(this.obj.id);
    this.router.navigate(['account/list']);
  }

  cancel(){
    this.router.navigate(['account/list']);
  }

}
