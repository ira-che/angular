import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent {
  @Input() filterItem: {isCalendar, defaultValue, options};
  @Input() id: number;
  @Input() cssClass: string;
  @Output() filterVal = new EventEmitter();
  title: string;
  value: number;
  options: [];

  constructor() { }

  ngOnInit() {
    this.value = this.filterItem.defaultValue;
    this.options = this.filterItem.options;
    this.title = this.options[this.value];
  }

  isSelected = (i) => {
    return this.value === i ? 'active' : '';
  }

  selectIt = (i, event) => {
    this.filterVal.emit(i);
    event.preventDefault();
  }

}
