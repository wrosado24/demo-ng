import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account.model';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) {
    this.accounts = [];
   }

  async ngOnInit() {
    const response = await this.accountService.listAccounts();
    if(response != null){
      this.accounts = response;
    }
    console.log(this.accounts);
  }

}
