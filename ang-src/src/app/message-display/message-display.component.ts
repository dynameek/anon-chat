import {Component, OnInit, Renderer2} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import {ChatService} from '../service/chat.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {
  private myId;
  private isSent = false;
  message;
  chatInfo;


  constructor(
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService
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
    }, 500);
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
        this.chatInfo = data;
      },
      err => console.log(err)
    );
  }
  private getUnreadMessages() {
    this.chatService.getUnreadMessages(this.chatInfo._id).subscribe(
      data => {
        for (const index in data) {
          if (data[index] && data[index].by) {
            const msg = data[index];
            if (msg.by === this.myId) {
              console.log(data);
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
  public sendMessage() {
    const newMessage = {
      msgBody: this.message,
      msgBy: this.myId,
      msgFor: this.chatInfo._id,
    };

    this.isSent = false;

    this.chatService.sendMessage(newMessage).subscribe(
      data => this.isSent = true,
      err => this.isSent = false
    );
  }
}
