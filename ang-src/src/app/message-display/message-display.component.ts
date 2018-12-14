import {Component, OnInit, Renderer2} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import {ChatService} from '../service/chat.service';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {UserService} from '../service/user.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-message-display',
    templateUrl: './message-display.component.html',
    styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {
    private myId;
    private otherUser;
    private isSent = false;
    message;
    private chatInfo;
    public isActive = true;


    constructor(
        private renderer: Renderer2,
        private router: Router,
        private route: ActivatedRoute,
        private chatService: ChatService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.myId = localStorage.getItem('_id');
        this.chatInfo = {
            _id: this.route.snapshot.params.id,
            to: '',
            from: ''
        };
        this.getChatInfo();
        this.getAllChatMessages();


        setInterval(() => {
            this.getUnreadMessages();
            this.checkIfChatActive();
        }, 500);
    }

    private checkIfChatActive() {
        this.chatService.checkIfActive(this.chatInfo._id).subscribe(
            isActive => {
                if (!isActive) {
                    this.isActive = false;
                }
            }
        );
    }

    private displayMessage(message: string, mine: boolean): void {
        const msgHolder = document.getElementById('msg-list');
        const msgItem = this.renderer.createElement('div');
        msgItem.appendChild(this.renderer.createText(message));
        this.renderer.addClass(msgItem, 'message');
        if (mine) {
            this.renderer.addClass(msgItem, 'msg-to');
        }
        this.renderer.appendChild(msgHolder, msgItem);

    }
    private getAllChatMessages() {
        this.chatService.getAllMessages(this.chatInfo._id).subscribe(
            data => {
                for (const index in data) {
                    if (index) {
                        const msg = data[index];
                        if (msg.by === this.myId) {
                            this.displayMessage(msg.body, true);
                        } else {
                            this.displayMessage(msg.body, false);
                        }
                    }
                }
            },
            err => console.log(err)
        );
    }
    private getChatInfo() {
        this.chatService.getChatInfo(this.chatInfo._id).subscribe(
            data => {
                this.chatInfo = JSON.parse(data);
                const uId = (this.myId == this.chatInfo.from) ? this.chatInfo.to : this.chatInfo.from;
                this.userService.getOtherUser(uId).subscribe(
                    userInfo => {
                        this.otherUser = userInfo;
                    },
                            err => console.log(err)
                );
            },
            err => console.log(err)
        );
    }
    private getUnreadMessages() {
        const chatId = this.chatInfo._id;
        this.chatService.getUnreadMessages({chat: chatId, me: this.myId}).subscribe(
            data => {
                for (const index in data) {
                    if (data[index] && data[index].by) {
                        const msg = data[index];
                        this.chatService.updateMessageFetchStatus(index).subscribe(
                            isModified => {
                                if (isModified) {
                                    this.displayMessage(msg.body, false);
                                }
                            }
                        );
                    }
                }
            },
            err => console.log(err)
        );
    }
    public sendMessage(chatId) {
        const newMessage = {
            msgBody: this.message,
            msgBy: this.myId,
            msgFor: chatId,
        };

        this.isSent = false;

        this.chatService.sendMessage(newMessage).subscribe(
            data => {
                this.isSent = true;
                this.displayMessage(newMessage.msgBody, true);
            },
            err => this.isSent = false
        );
    }
}
