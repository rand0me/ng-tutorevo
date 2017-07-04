import { Injectable } from '@angular/core';
import { Socket }     from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';
import { Message } from './message.model';

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {
  }

  onMessage(): Observable<Message> {
    return this.socket.fromEvent('incoming')
      .map((res: any) => new Message(res));
  }

  onUserConnected(): Observable<string> {
    return this.socket.fromEvent('connected');
  }

  onUserDisconnected(): Observable<string> {
    return this.socket.fromEvent('disconnected');
  }

  onHistory(): Observable<Message[]> {
    this.socket.emit('requesthistory', {});

    return this.socket.fromEvent('history')
      .map((res: any) => res.map(message => new Message(message)));
  }
  
  setName(name: string) {
    this.socket.emit('name', name);
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

}