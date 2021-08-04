import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private accountService: AccountService, private router:Router) { 
    this.accountForm = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  }

  ngOnInit(): void {
    
  }

  async save(){
    const jsonForm = this.accountForm.value;
    await this.accountService.saveAccount(jsonForm);
    this.router.navigate(['account/list']);
  }

}
