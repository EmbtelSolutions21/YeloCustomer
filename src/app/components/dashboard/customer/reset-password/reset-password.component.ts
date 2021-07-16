import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/auth/jarwis.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private Jarvis:JarwisService
    ,private notify:SnotifyService,
    private router:Router
    ) { }
    public error : any;

  public form = {
    email:null,
    password:null,
    password_confirmation:null
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.Jarvis.resetPassword(this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error),

    );
  }
  handleResponse(res) {
    this.notify.success(res.data,{timeout:0});
    this.form.email = null;
    this.router.navigate(['/profile']);
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
