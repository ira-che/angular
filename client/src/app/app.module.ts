import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { FilterForTasksPipe } from './app.pipe.filterForTasks';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './page/navbar/navbar.component';

import { FilterComponent } from './page/filter/filter.component';
import { DropdownFilterComponent } from './page/filter/dropdown-filter/dropdown-filter.component';
import { ListComponent } from './page/list/list.component';
import { AccordionComponent } from './page/list/accordion/accordion.component';
import { UserBarInfoComponent } from './page/user-bar-info/user-bar-info.component';
import { LinkToProfileComponent } from './page/user-bar-info/link-to-profile/link-to-profile.component';
import { UserImageComponent } from './page/user-bar-info/user-image/user-image.component';
import { NavbarProfileComponent } from './page/navbar/navbar-profile/navbar-profile.component';
import { ModalComponent } from './page/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ItemComponent } from './page/list/accordion/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FilterComponent,
    NavbarComponent,
    DropdownFilterComponent,
    ListComponent,
    AccordionComponent,
    UserBarInfoComponent,
    LinkToProfileComponent,
    UserImageComponent,
    FilterForTasksPipe,
    NavbarProfileComponent,
    ModalComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
