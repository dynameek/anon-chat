import {Component, EventEmitter, OnInit} from '@angular/core';
import { System } from '../../assets/js/System.js';
import { Router } from '@angular/router';
import { IUser } from '../models/user';
import { UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: IUser;
  private msgBox = 'form-message';
  private system = new System();
  private baseUri = 'start';
  private isUserAdded = false;

  constructor( private router: Router, private userServ: UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      wantsToChat: false,
      isEngaged: false,
      isTyping: false
    };
  }
  public onSubmit() {
    if (this.user.username.length < 6) {
      this.system.displayFormMessage(this.msgBox, 'Username too short', 3);
    } else {
      this.userServ.registerUser(this.user)
        .subscribe(
          (user) => {
            this.isUserAdded = true;
            this.router.navigate([(this.baseUri + '/' + user._id)]);
          },
          (err) => this.system.displayFormMessage(this.msgBox, 'could not add user', 3)
        );
    }
  }
}
