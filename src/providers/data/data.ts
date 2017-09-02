import { Profile } from './../../models/profile/profile.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { User } from "firebase/app";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase ) {
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}
