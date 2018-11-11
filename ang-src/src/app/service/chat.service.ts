import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IChat } from '../models/chat';
import { map } from 'rxjs/operators';

const serverUri = 'http://localhost:3000';
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }
  public establishChat(chatUsers: IChat) {
    const reqBody = JSON.stringify({
      to: chatUsers.to,
      from: chatUsers.from
    });
    return this.http.post <IChat> (serverUri + '/chat/add', reqBody, headerOptions).pipe(
      map(x => JSON.stringify(x))
    );
  }
  public getChatInfo(chatId) {
    return this.http.get(serverUri + '/chat/' + chatId);
  }
  public getAllMessages(chatId){
    return this.http.get(serverUri + '/message/' + chatId + '/all');
  }
  public getUnreadMessages(chatId){
    return this.http.get(serverUri + '/message/' + chatId + '/unread');
  }
  public getUserChat(userId) {
    return this.http.get(serverUri + '/chat/user/' + userId);
  }
  public sendMessage(message) {
    return this.http.post(serverUri + '/message/add', message, headerOptions).pipe(
      map( x => JSON.stringify(x))
    );
  }
}
