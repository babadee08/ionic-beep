import { LoginResponse } from './../../models/login/login-response.interface';
import { AuthProvider } from './../../providers/auth/auth';
import { Account } from './../../models/account/account.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import { ToastController } from "ionic-angular";

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>

  //constructor(private afAuth: AngularFireAuth, private toast: ToastController) { }
  constructor(private auth: AuthProvider) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.account); 
      this.registerStatus.emit(result);
      /*this.toast.create({
        message: 'Accout Successfully Created',
        duration: 5000
      }).present();*/

      console.log(result);
    } catch (e) {
      console.error(e);
      this.registerStatus.emit(e);
      /*this.toast.create({
        message: e.message,
        duration: 5000
      }).present();*/
    }
  }
}
