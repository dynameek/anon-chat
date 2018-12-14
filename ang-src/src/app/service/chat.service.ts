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

    //
    public checkIfActive(chatId) {
        return this.http.get(serverUri + '/chat/active/' + chatId);
    }
    public establishChat(chatUsers: IChat) {
        const reqBody = JSON.stringify({
            to: chatUsers.to,
            from: chatUsers.from,
            isActive: true
        });
        return this.http.post <IChat> (serverUri + '/chat/add', reqBody, headerOptions).pipe(
            map(x => JSON.stringify(x))
        );
    }
    public getChatInfo(chatId) {
        return this.http.get(serverUri + '/chat/' + chatId).pipe(
            map( x => JSON.stringify(x))
        );
    }
    public getAllMessages(chatId){
        return this.http.get(serverUri + '/message/' + chatId + '/all');
    }
    public getUnreadMessages(chatInfo) {
        return this.http.get(serverUri + '/message/unread/' + chatInfo.chat + '/' + chatInfo.me);
    }
    public getUserChat(userId) {
        return this.http.get(serverUri + '/chat/user/' + userId).pipe(
            map( x => JSON.stringify(x))
        );
    }
    public updateMessageFetchStatus(msgId) {
        return this.http.put(serverUri + '/message/unread/' + msgId, headerOptions);
    }
    public sendMessage(message) {
        return this.http.post(serverUri + '/message/add', message, headerOptions).pipe(
            map( x => JSON.stringify(x))
        );
    }

    public leaveChat(chatId) {
        return this.http.put( serverUri + '/chat/' + chatId, headerOptions);
    }
}
