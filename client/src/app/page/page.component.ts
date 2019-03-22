import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  jsonData;

  constructor() {
    this.jsonData = {
      userinfo: {
        name: 'Name',
        surname: 'Surname',
        position: 'position',
        managerName: 'Manager Has',
        managerSurname: 'Name',
        departament: 'Departament Has Name'
      },
      tasks: [
        {
          name: 'Upcoming task name',
          excerpt: 'This content is straight in the template.',
          status: 'LOW',
          date: '22/03/2019',
          author: 'Alex Somename',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
            'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
        },
        {
          name: 'Upcoming task name2',
          excerpt: 'This content is straight in the template2.',
          status: 'HIGHT',
          date: '23/03/2019',
          author: 'Alex3 Somename',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
            'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
        },
        {
          name: 'Upcoming task name3',
          excerpt: 'This content is straight in the template3.',
          status: 'LOW',
          date: '24/03/2019',
          author: 'Alex2 Somename',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
        },
        {
          name: 'Upcoming task name4',
          excerpt: 'This content is straight in the template4.',
          status: 'MEDIUM',
          date: '25/03/2019',
          author: 'Alex1 Somename',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
        },
        {
          name: 'Upcoming task name5',
          excerpt: 'This content is straight in the template5.',
          status: 'LOW',
          date: '26/03/2019',
          author: 'Alex2 Somename',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
        }
      ],
      filters: [
        {
          isCalendar: false,
          defaultValue: 1,
          options: [
            'Show all tasks',
            'Show delegates tasks only',
            'Show issues only'
          ],
        },
        {
          isCalendar: false,
          defaultValue: 0,
          options: [
            'Filter by Status',
            'High',
            'Normal',
            'Low'
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

  ngOnInit() {}

  selectFilterOption = (data: any) => {
    if (this.jsonData.filters.length) {
      this.jsonData.filters = this.jsonData.filters.map((item, index) =>
        index === data.filterId ? {isCalendar: item.isCalendar, defaultValue: data.optionId, options: item.options} : item);
    }
  }
}
