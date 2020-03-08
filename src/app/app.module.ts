import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressIndicatorModule } from '@ea/ea-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
