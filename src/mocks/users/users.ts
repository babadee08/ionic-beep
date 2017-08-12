import { User } from './../../models/user/user.interface';

const userlist: User[] = [
    { firstName: 'Paul', lastName: 'Halliday', avatar: 'assets/img/avatar.png', email: 'paul@halliday.com' },
    { firstName: 'John', lastName: 'Doe', avatar: 'assets/img/avatar.png', email: 'john@doe.com' },
    { firstName: 'Sarah', lastName: 'Smith', avatar: 'assets/img/avatar.png', email: 'sarah@smith.com' },
    { firstName: 'Roger', lastName: 'Rabbit', avatar: 'assets/img/avatar.png', email: 'roger@rabbit.com' }
];

export const USER_LIST = userlist;