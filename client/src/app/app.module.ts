import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { FilterForTasksPipe } from './app.pipe.filterForTasks';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { FilterComponent } from './page/filter/filter.component';
import { DropdownFilterComponent } from './page/filter/dropdown-filter/dropdown-filter.component';
import { ListComponent } from './page/list/list.component';
import { AccordionComponent } from './page/list/accordion/accordion.component';
import { UserBarInfoComponent } from './page/user-bar-info/user-bar-info.component';
import { LinkToProfilComponent } from './page/user-bar-info/link-to-profil/link-to-profil.component';
import { UserImageComponent } from './page/user-bar-info/user-image/user-image.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FilterComponent,
    DropdownFilterComponent,
    ListComponent,
    AccordionComponent,
    UserBarInfoComponent,
    LinkToProfilComponent,
    UserImageComponent,
    FilterForTasksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
