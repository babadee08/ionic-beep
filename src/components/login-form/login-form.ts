import { AuthProvider } from './../../providers/auth/auth';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';
//import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {
  
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>

  //private afAuth: AngularFireAuth
  constructor(private navCtrl: NavController, private auth: AuthProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    const result = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(result);
    
    /*try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      } 
      console.log(result);
      this.loginStatus.emit(result);

    } catch (e) {
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
    }*/
  }

  navigateToRegisterPage(pageName: string) {
    this.navCtrl.push('RegisterPage');
  }

}
