import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name: string;
  title = 'demo-ng';

  constructor(public auth: AuthService){
    this.name = "";
    this.auth.user$.pipe(
      tap(user=>{
        if(user?.nickname != null){
          this.name = user.nickname;
        }
      })
    ).subscribe(data=>data);
    console.log(this.name);
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
