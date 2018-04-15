import { Injectable } from '@angular/core';
import { User } from '../datamodel/user';

@Injectable()
export class Serv1Service {
  private user: User;
  private userList: User[];

  constructor() {
    this.userList = [];
  }

  public getUserList(): User[] {
    const user1 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-info');
    const user2 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-warning');
    const user3 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-primary');
    const user4 = new User(1, 'KHG', '123456789', 'khg@gmail.com', 'bg-success');
    this.userList.push(user1);
    this.userList.push(user2);
    this.userList.push(user3);
    this.userList.push(user4);

    return this.userList;
  }
}
