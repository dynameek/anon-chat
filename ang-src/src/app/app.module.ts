import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginComponent } from './login/login.component';
import { StartChatComponent } from './start-chat/start-chat.component';
import { ChatComponent } from './chat/chat.component';

import {UserService} from './service/user.service';
import { MessageDisplayComponent } from './message-display/message-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartChatComponent,
    ChatComponent,
    MessageDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
