import { Component, OnInit, ViewChild, ElementRef }  from '@angular/core';
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
  @ViewChild('messagesWindowRef') messagesWindowRef: ElementRef;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.onMessage()
      .do(message => this.messages.push(message))
      .do(() => this.scrollMessagesToBottom())
      .subscribe();

    this.chatService.onUserConnected()
      .do(user => this.messages.push({ text: `${user} connected` }))
      .subscribe();

    this.chatService.onUserDisconnected()
      .do(user => this.messages.push({ text: `${user} disconnected` }))
      .subscribe();
  }

  onUserNameSubmit(formData) {
    this.userName = formData.userName;
    this.chatService.setName(this.userName);

    this.chatService.onHistory()
      .do(messages => this.messages = messages)
      .do(() => this.scrollMessagesToBottom())
      .subscribe();

  }

  onMessageSubmit() {
    this.chatService.sendMessage(this.userMessage);
    this.userMessage = '';
  }

  private scrollMessagesToBottom() {
    setTimeout(() => this.messagesWindowRef.nativeElement.scrollTop = this.messagesWindowRef.nativeElement.scrollHeight, 100);
  }

}
