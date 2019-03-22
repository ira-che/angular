import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  customClass: string = 'customClass';
  isFirstOpen: boolean = false;
  items: any;
  constructor() {
    this.items = [
     {taskName:'Upcoming task name', shortDes:'This content is straight in the template.', status:'LOW', date: "22 / 03/ 2019"},
     {taskName:'Upcoming task name2', shortDes:'This content is straight in the template2.', status:'HIGHT', date: "23 / 03/ 2019"},
     {taskName:'Upcoming task name3', shortDes:'This content is straight in the template3.', status:'LOW', date: "24 / 03/ 2019"},
     {taskName:'Upcoming task name4', shortDes:'This content is straight in the template4.', status:'MEDIUM', date: "25 / 03/ 2019"},
     {taskName:'Upcoming task name5', shortDes:'This content is straight in the template5.', status:'LOW', date: "26 / 03/ 2019"}
     ];
 }
  ngOnInit() {
  }

}
