import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ListComponent } from './page/list/list.component';
import { AccordionComponent } from './page/list/accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ListComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
