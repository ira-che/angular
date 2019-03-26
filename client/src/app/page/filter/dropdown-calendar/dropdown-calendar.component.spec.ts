import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCalendarComponent } from './dropdown-calendar.component';

describe('DropdownCalendarComponent', () => {
  let component: DropdownCalendarComponent;
  let fixture: ComponentFixture<DropdownCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
