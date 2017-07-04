import { Component, OnInit }  from '@angular/core';
import { ChatService }        from '../shared/chat.service';
import { Message }            from '../shared/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] | any = [];
  userMessage: string;
  userName: string;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.onHistory()
      .do(messages => this.messages = messages)
      .subscribe();

    this.chatService.onMessage()
      .do(message => this.messages.push(message))
      .subscribe();

    this.chatService.onUserConnected()
      .do(user => this.messages.push({ text: `"${user}" connected` }))
      .subscribe();

    this.chatService.onUserDisconnected()
      .do(user => this.messages.push({ text: `"${user}" connected` }))
      .subscribe();
  }

  onUserNameSubmit(formData) {
    this.userName = formData.userName;
    this.chatService.setName(this.userName);
  }

  onMessageSubmit() {
    this.chatService.sendMessage(this.userMessage);
    this.userMessage = '';
  }

}
