import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  jsonData: {};

  constructor() {
    this.jsonData =  {
      "filters": [
        {
          "isCalendar": false,
          "defaultValue": 1,
          "arr": [
            "Show all tasks",
            "Show delegates tasks only",
            "Show issues only"
          ],
        },
        {
          "isCalendar": false,
          "defaultValue": 0,
          "arr": [
            "Filter by Status",
            "High",
            "Normal",
            "Low"
          ],
        },
        // {
        //   "title": "Filter by date",
        //   "selectedId": -1,
        //   "isCalendar": true,
        //   "arr": ["21/03/2019"],
        // }
      ]
    };

  }

  ngOnInit() {};

  selectFilterOption = (data: any) => {
    this.jsonData["filters"] = this.jsonData["filters"].map((item, index) =>
      index == data.filterId ? {"isCalendar": item.isCalendar, "defaultValue": data.optionId, "arr": item.arr} : item);
  };
}
