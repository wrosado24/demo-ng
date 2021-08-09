import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nickname: string; 

  constructor(private auth: AuthService) { 
    this.nickname = "";
    this.auth.user$.pipe(
      tap(user=>{
        if(user?.nickname != null){
          this.nickname = user.nickname;
        }
      })
    ).subscribe(data=>data);
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
