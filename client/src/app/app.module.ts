import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { FilterComponent } from './page/filter/filter.component';
import { DropdownFilterComponent } from './page/filter/dropdown-filter/dropdown-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FilterComponent,
    DropdownFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
