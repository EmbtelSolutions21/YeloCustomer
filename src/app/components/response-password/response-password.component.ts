import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/auth/jarwis.service';

@Component({
  selector: 'app-response-password',
  templateUrl: './response-password.component.html',
  styleUrls: ['./response-password.component.css']
})
export class ResponsePasswordComponent implements OnInit {



  public form = {
    email:null,
    password: null,
    password_confirmation:null,
    resetToken:null,
  }

  public error : any;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private jarwis:JarwisService,
    private notify:SnotifyService
    ) {

    route.queryParams.subscribe(params=>{
      this.form.resetToken = params['token']
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    let _router = this.router;
    this.notify.confirm('Done!, Now login with new Password', {
      buttons:[
        {text: 'Okay',
        action: toster =>{
           _router.navigateByUrl('/login'),
           this.notify.remove(toster.id)
          }
      },
      ]
    })
  }
  handleError(error){
    this.error = error.error.errors;
  }
}
