import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { JarwisService } from 'src/app/auth/jarwis.service';
import { TokenService } from 'src/app/auth/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Jarwis:JarwisService,
    private Token:TokenService,
    private router:Router,
    private auth:AuthService) {

  }

  public form = {
    email: null,
    password:null
  };

  public error = null
  ngOnInit(): void {

  }
   onSubmit(){
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    //  console.log(this.form)
   }

   handleResponse(data){
      this.Token.handle(data.access_token)
      this.auth.changeAuthStatus(true);
      this.router.navigateByUrl('/profile')
   }
   handleError(error){
      this.error = error.error.error
   }
}
