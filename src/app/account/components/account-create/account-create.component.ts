import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
  providers: [MessageService]
})
export class AccountCreateComponent {

  accountForm: FormGroup;

  constructor(private accountService: AccountService, private router:Router, 
    private messageService: MessageService) { 
    this.accountForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  async save(){
    const jsonForm = this.accountForm.value;
    if(jsonForm.name != "" && jsonForm.email != "" && jsonForm.password != ""){
      await this.accountService.saveAccount(jsonForm);
      this.messageService.add({severity:'success', summary: 'Account create', detail: '', sticky: true});
      this.router.navigate(['account/list']);
    }else{
      this.messageService.add({severity:'error', summary: 'An ocurred error', detail: '', sticky: true});
    }
  }

  cancel(){
    this.router.navigate(['account/list']);
  }

}
