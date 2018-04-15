import { Component, OnInit } from '@angular/core';
import { User } from '../../datamodel/user';
import { Serv1Service } from '../../dataservice/serv1.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  private service1: Serv1Service;

  private title: String;
  private id: Number;
  private userList: User[];

  constructor(service1: Serv1Service) {
    this.service1 = service1;
    this.id = 1;
    this.title = 'Hello Angular!!!';
  }

  ngOnInit() {
    // this.userList = User.getUserList();
    this.userList = this.service1.getUserList();
  }

}
