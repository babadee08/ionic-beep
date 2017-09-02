import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser() {
    return this.auth.authState;
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
      return <LoginResponse> {
        error: e
      };
    }
  }

  /**
   * Implement Login
   * @param account 
   */
  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    } catch (e) {
      return <LoginResponse> {
        error: e
      };
    }
  }

}
