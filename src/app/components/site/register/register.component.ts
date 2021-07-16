import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/auth/jarwis.service';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public error= {
    email:null,
    password:null
  };
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };



  constructor(private jarwis:JarwisService,
    private Token:TokenService,
    private router:Router,
    private notify:SnotifyService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.jarwis.signup(this.form).subscribe(
      data=> this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleError(error) {
    this.error = error.error.errors;
  }
  handleResponse(data){
    // this.Token.handle(data.access_token)
    this.notify.success(data.data,{timeout:0});
    this.router.navigateByUrl('/login');
  }
}
