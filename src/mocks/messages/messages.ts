//import { USER_LIST } from './../users/users';
import { Message } from './../../models/messages/message.interface';
import { USER_LIST } from "../profiles/profiles";

const userlist =  USER_LIST

const messageList: Message[] = [];

userlist.forEach(user => {
    messageList.push({ user: user, date: new Date(), lastMessage: 'Hello'})
});

export const MESSAGE_LIST = messageList;