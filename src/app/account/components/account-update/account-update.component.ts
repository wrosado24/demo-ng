import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

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

  update(){

  }

}
