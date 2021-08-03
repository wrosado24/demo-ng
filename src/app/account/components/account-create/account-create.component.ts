import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private accountService: AccountService) { 
    this.accountForm = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  }

  ngOnInit(): void {
    
  }

  async saveAccount(){

    const jsonForm = this.accountForm.value;

    if(jsonForm != null){
      await this.accountService.saveAccount(jsonForm);
      window.location.href='account/list';
    }
  }

}
