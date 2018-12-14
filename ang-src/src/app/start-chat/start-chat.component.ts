import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService} from '../service/user.service';
import { ChatService} from '../service/chat.service';


import { System } from '../../assets/js/System.js';

@Component({
    selector: 'app-start-chat',
    templateUrl: './start-chat.component.html',
    styleUrls: ['./start-chat.component.css']
})
export class StartChatComponent implements OnInit {
    private id;
    private error;
    private system = new System();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private chatService: ChatService
    ) { }

    ngOnInit() {
        if (!this.userService.checkIfUserIsSaved()) {
            this.router.navigate(['/']);
        }
        this.setId(this.route.snapshot.params.id);
        localStorage.setItem('_id', this.id);
    }

    public setId(id) {
        this.id = id;
    }
    public startChat() {
        this.initiateChat();
        this.system.displayFormMessage(
            'form-message',
            'No user(s) available. Please, try again',
            3);
    }
    public initiateChat(): void{
        //
        this.userService.updateFreedom({id: this.id, value: true}).subscribe(
            freedomUpdated => {
                setTimeout(() => {
                    this.userService.checkEngagement(this.id).subscribe(
                        iAmEngaged => {
                            if (iAmEngaged) {
                                this.chatService.getUserChat(this.id).subscribe(
                                    myChat => {
                                        const myChatId = JSON.parse(myChat)._id;
                                        if (myChatId) {
                                            this.router.navigate(['/chat/' + myChatId]);
                                        } else {
                                            this.error = 'user: ' + this.id + ' Engaged and Not In chat';
                                        }
                                    },
                                    err => this.error = err
                                );
                            } else {
                                this.userService.updateEngagement({id: this.id, value: true}).subscribe(
                                    iAmNowEngaged => {
                                        if (iAmNowEngaged) {
                                            this.userService.getFreeUser().subscribe(
                                                freeUser => {
                                                    if (freeUser) {
                                                        this.userService.updateEngagement({id: freeUser, value: true}).subscribe(
                                                            userIsEngaged => {
                                                                if (userIsEngaged) {
                                                                    this.chatService.establishChat(
                                                                        {to: freeUser, from: this.id, isActive: true})
                                                                        .subscribe(
                                                                            chat => {
                                                                                const chatId = JSON.parse(chat)._id;
                                                                                if (chatId) {
                                                                                    this.router.navigate(['/chat/' + chatId]);
                                                                                } else {
                                                                                    this.error = 'Unable to establish chat: ' + this.id;
                                                                                    this.userService.updateEngagement(
                                                                                        {id: freeUser, value: false});
                                                                                }
                                                                            },
                                                                            err => this.error = err
                                                                        );
                                                                } else {
                                                                    this.error = 'Unable to engage user: ' + freeUser;
                                                                }
                                                            },
                                                            err => this.error = err
                                                        );
                                                    } else {
                                                        this.error = 'Unable to get free User ';
                                                    }
                                                },
                                                err => this.error = err
                                            );
                                        } else {
                                            this.error = 'Unable to engage self: ' + this.id;
                                        }
                                    },
                                    err => this.error = err
                                );
                            }
                        },
                        err => this.error = err
                    );
                }, 1000);
            }
        );
    }
}
