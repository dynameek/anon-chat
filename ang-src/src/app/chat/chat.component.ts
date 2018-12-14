import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ChatService } from '../service/chat.service';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    private userId;
    public chatId;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private chatService: ChatService
    ) { }

    ngOnInit() {
        if (!this.userService.checkIfUserIsSaved()) {
            this.router.navigate(['/']);
        }

        this.userId = localStorage.getItem('_id');
        this.setChatId(this.route.snapshot.params.id);

    }

    private setChatId(id) {
        this.chatId = id;
    }

    public leaveChat() {
        this.chatService.getChatInfo(this.chatId).subscribe(
            data => {
                const chatInfo = JSON.parse(data);
                if (chatInfo._id) {
                    this.chatService.leaveChat(chatInfo._id).subscribe(
                        left => {
                            this.userService.freeUser(chatInfo.to).subscribe(
                                toLeft => {
                                    this.userService.freeUser(chatInfo.from).subscribe(
                                        fromLeft => {
                                            this.router.navigate(['/start/' + this.userId]);
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            }
        );
    }
}
