import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentWidgetComponent } from './content-widget/content-widget.component';
import { ContentService } from "./content.service";
import { AccordionComponent } from './shared/accordion/accordion.component';
import { AlertModule } from "ngx-bootstrap/index";

@NgModule({
  declarations: [
    AppComponent,
    ContentWidgetComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
