import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchquery:string;
  public loggedin: boolean;
  constructor(
    private auth:AuthService,
    private Token:TokenService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value=>this.loggedin = value)
  }
  
  searchnow(event){
    console.log(this.searchquery);
    window.location.href = '/search-results?s='+this.searchquery;
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
