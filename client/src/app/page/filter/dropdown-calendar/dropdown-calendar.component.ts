import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-calendar',
  templateUrl: './dropdown-calendar.component.html',
  styleUrls: ['./dropdown-calendar.component.scss']
})

export class DropdownCalendarComponent implements OnInit {
  @Input() filterItem: {isCalendar, defaultValue, options};
  // @Input() id: number;
  @Input() cssClass: string;
  @Output() filterVal = new EventEmitter();
  title: string;
  // data: Date;
  //
  // dateValue: Date;
  bsInlineValue = new Date();
  constructor() { }

  ngOnInit() {
    let titleObj: {name, value};
    titleObj = this.filterItem.options.filter((item: {value, name}) => item.value === -1)[0];
    this.title = titleObj.name;
    // console.log('titleObj');
    // console.log(titleObj);
    // console.log(this.title);
    // console.log('defaultValue');
    // console.log(this.filterItem.defaultValue);
    // let dataObj: {name, value};
    // dataObj = this.filterItem.options.filter((item: {value, name}) => item.value === 0)[0];
    // console.log('dataObj');
    // console.log(dataObj);
    // // this.dateValue = this.data || new Date();
    // this.dateValue = (this.filterItem.defaultValue === -1) ? new Date() : this.strToDate(dataObj.name);
    // console.log('input date');
    // console.log(this.dateValue);
  }

  // strToDate = ( date: string ) => {
  //   const str = date.split('/');
  //   return new Date(str[1] + '/' + str[0] + '/' + str[2]);
  // }
  //
  // onValueChange(value: Date): void {
  //   this.data = value;
  // }

}
