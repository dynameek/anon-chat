import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user';
import {map} from 'rxjs/operators';

const serverUri = 'http://localhost:3000';
const headerOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    public checkIfUserIsSaved() {
       if (!localStorage.getItem('_id')) {
           return false;
       }
       return true;
    }
    public checkEngagement(userId) {
        return this.http.get(serverUri + '/user/engaged/' + userId);
    }
    public getFreeUser() {
        return this.http.get(serverUri + '/user/free');
    }
    public getOtherUser(uId) {
        return this.http.get(serverUri + '/user/' + uId)
    }
    public registerUser(user: IUser) {
        /*  Set request Body*/
        const reqBody = JSON.stringify({
            username: user.username,
        });
        return this.http.post <IUser>(serverUri + '/user/add' , reqBody, headerOptions);
    }
    public updateEngagement(data) {
        const values = {
            id: data.id,
            value: data.value
        };
        return this.http.put(serverUri + '/user/engaged',  values, headerOptions);
    }
    public updateFreedom(data) {
        return this.http.put(serverUri + '/user/free', data, headerOptions);
    }

    public freeUser(id) {
        return this.http.put(serverUri + '/user/free/' + id, headerOptions);
    }
}
