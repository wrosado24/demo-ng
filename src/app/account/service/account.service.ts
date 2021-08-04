import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';

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
        this.httpClient.get<Account[]>(this.baseUrl+'accounts')
          .subscribe((response: Account[]) => {
            resolve(response),
            reject('Error')
        });
      });
    }
  
    saveAccount(account: Account): Promise<Account>{
      return new Promise((resolve, reject) =>{
        this.httpClient.post<Account>(this.baseUrl+'accounts', account)
        .subscribe((response: Account) =>{
          resolve(response),
          reject('Error')
        });
      });
      
    }
  
    updateAccount(account: Account){
      return new Promise((resolve, reject) =>{
        this.httpClient.put<Account>(this.baseUrl+'accounts', account)
        .subscribe((response: Account) =>{
          resolve(response),
          reject('Error')
        });
      });
    }
  
    deleteAccount(id: number){
      return new Promise((resolve, reject) =>{
        this.httpClient.delete<any>(this.baseUrl+'accounts/'+id)
        .subscribe((response: any) =>{
          resolve(response),
          reject('Error')
        });
      });
    }

}
