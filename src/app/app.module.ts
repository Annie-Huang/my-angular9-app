import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressIndicatorModule, MessageModule, MessageService} from '@ea/ea-ui';
import {MessagesModule as pMessagesModule} from 'primeng/messages';
import {MessageModule as pMessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProgressIndicatorModule,
    MessageModule,
    pMessagesModule,
    pMessageModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
