import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  profile = {} as Profile
  text: string;

  constructor() {
    console.log('Hello EditProfileFormComponent Component');
    this.text = 'Hello World';
  }

  saveProfile() {

  }

}
