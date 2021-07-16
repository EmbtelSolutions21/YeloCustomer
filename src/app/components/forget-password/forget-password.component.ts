import { Component, OnInit } from '@angular/core';
import { SnotifyEvent, SnotifyModule, SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/auth/jarwis.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public form = {
    email: null,

  };
  public error = null
  constructor(private Jarvis: JarwisService,
    private notify:SnotifyService ) {

     }

  ngOnInit(): void {
  }
  onSubmit(){
    this.notify.info('Wait...' ,{timeout:5000})
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)

    );

  }
  handleResponse(res) {
    this.notify.success(res.data,{timeout:0});
    // console.log(res)
    this.form.email = null;
  }
}
