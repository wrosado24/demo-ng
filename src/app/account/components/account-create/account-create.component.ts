import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    
  }

  async save(){
    const jsonForm = this.accountForm.value;
    if(jsonForm.name != "" && jsonForm.email != "" && jsonForm.password != ""){
      await this.accountService.saveAccount(jsonForm);
      this.router.navigate(['account/list']);
    }else{
      Swal.fire('Tienes que completar todos los campos.');
    }
  }

  cancel(){
    this.router.navigate(['account/list']);
  }

}
