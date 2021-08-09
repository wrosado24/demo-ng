import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name: string;
  nameUser: string;
  lastname: string;
  title = 'demo-ng';

  constructor(public auth: AuthService, private router: Router){

    this.name = "";
    this.nameUser = "";
    this.lastname = "";

    this.auth.user$.pipe(
      tap(user=>{
        if(user?.nickname != null && user?.given_name != null && user?.family_name != null){
          this.nameUser = user.given_name;
          this.lastname = user.family_name;
          this.name = user.nickname;
        }
      })
    ).subscribe(data=>data);
    
  }

  ngOnInit(): void{
    this.auth.isAuthenticated$.pipe(
      tap(loggedIn=>{
        if(!loggedIn){
          this.auth.loginWithRedirect();
        }
      })
    ).subscribe(val=> val);
  }


  logout(){
    this.auth.logout();
  }
}
