import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent {
  @Input() filterItem: {};
  @Input() id: number;
  @Output() filterVal = new EventEmitter();

  ngOnInit() {}

  isSelected = (i) => {
    return this.filterItem["defaultValue"] == i ? "active" : "";
  };

  getTitle = () => {
    return this.filterItem['arr'][this.filterItem["defaultValue"]];
  }

}
