import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {ReactiveFormsModule} from '@angular/forms';
import { SampleDatePickerReactiveFormsComponent } from './sample-date-picker-reactive-forms/sample-date-picker-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDatePickerReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMyDatePickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
