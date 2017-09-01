import { Profile } from './../../models/profile/profile.interface';
//import { Profile } from './../../models/user/user.interface';

const userlist: Profile[] = [
    { firstName: 'Paul', lastName: 'Halliday', avatar: 'assets/img/avatar.png', email: 'paul@halliday.com', dateOfBirth: new Date() },
    { firstName: 'John', lastName: 'Doe', avatar: 'assets/img/avatar.png', email: 'john@doe.com', dateOfBirth: new Date() },
    { firstName: 'Sarah', lastName: 'Smith', avatar: 'assets/img/avatar.png', email: 'sarah@smith.com', dateOfBirth: new Date() },
    { firstName: 'Roger', lastName: 'Rabbit', avatar: 'assets/img/avatar.png', email: 'roger@rabbit.com', dateOfBirth: new Date() }
];

export const USER_LIST = userlist;