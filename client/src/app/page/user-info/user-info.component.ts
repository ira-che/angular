import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  avatar:string = "assets/img/navbar-symbol-mob.png";
  name:string = "Name";
  surname:string = "Surname";
  notificarionsNumber:number = 7;
  constructor() { }

  ngOnInit() {
  }

}
