import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = environment.urlApi;
  }

    //methods
    listAccounts(): Promise<Account[]>{
      return new Promise((resolve, reject) =>{
        this.httpClient.get<Account[]>(this.baseUrl + 'accounts')
          .subscribe((response: Account[]) => {
            resolve(response),
            reject('Error')
        });
      });
    }
  
    saveAccount(){
      
    }
  
    updateAccount(){
  
    }
  
    deleteAccount(){
      
    }

}
