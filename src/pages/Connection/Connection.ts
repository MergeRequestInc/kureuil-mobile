import { Component } from '@angular/core';

@Component({
  selector: 'page-connection',
  templateUrl: 'Connection.html'
})
export class ConnectionPage {
  email: string;
  password: string;

  login() {
      console.log(this.email + '' + this.password);
  }
}
