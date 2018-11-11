import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService} from '../service/user.service';
import { ChatService} from '../service/chat.service';


import { System } from '../../assets/js/System.js';

import {IChat} from '../models/chat';

@Component({
  selector: 'app-start-chat',
  templateUrl: './start-chat.component.html',
  styleUrls: ['./start-chat.component.css']
})
export class StartChatComponent implements OnInit {
  private id;
  private system = new System();
  private chatDetails;
  public users: Object[] = [];
  public chatUsers: IChat;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    /*  */
    this.chatUsers = {
      to: '',
      from: ''
    };

    this.chatDetails = {
      _id: '',
      to: '',
      from: ''
    };

    /*  */
    this.setId(this.route.snapshot.params.id);

    localStorage.setItem('_id', this.id);
  }

  public setId(id) {
    this.chatUsers.from = this.id = id;
  }
  public startChat() {
    this.initiateChat(0);
    this.system.displayFormMessage(
      'form-message',
      'No user(s) available.',
      3);
  }
  public initiateChat(count: number): void{
    if (count >= 5) {
      return;
    }
    count += 1;
    this.userService.updateFreeDom({id: this.id, value: true});
    setTimeout(() => {
        //  Check if I'm engaged
        this.userService.checkEngagement(this.id).subscribe(
          iamEngaged => {
            if(iamEngaged) {
                console.log('I am engaged');
                this.chatService.getUserChat(this.id).subscribe(
                  chatInfo => {
                    this.chatDetails = chatInfo;
                    count = 5;
                    this.router.navigate(['chat/' + this.chatDetails._id]);
                  }
                );
            } else {
                console.log('I am not engaged');
                //  Update my engagement status to true
                this.userService.updateEngagement({id: this.id, value: true}).subscribe(
                  data => {
                    console.log('Now engaged');
                    //  get a free user
                    this.userService.getFreeUser().subscribe(
                        freeUser => {
                          if (freeUser) {
                            console.log('User gotten: ' + freeUser);
                            //  lock user engagement
                            this.userService.updateEngagement(freeUser).subscribe(
                              updated => {
                                this.chatService.establishChat({to: freeUser, from: this.id}).subscribe(
                                  chat => {
                                    console.log('Chat generated: ' + chat);
                                    this.chatDetails = chat;
                                    count = 5;
                                    this.router.navigate(['chat/' + this.chatDetails._id]);
                                  }
                                );
                              }
                            );
                          }
                        }
                    );
                  }
                );
            }
          }
        );
    }, 1000);
    this.initiateChat(count);
  }
}
