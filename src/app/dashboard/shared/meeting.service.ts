import { Injectable } from '@angular/core';
import { Socket }     from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/take';
import  'rxjs/add/operator/do';

import { Meeting } from "./meeting.model";

@Injectable()
export class MeetingService {
  constructor(private socket: Socket) {
  }

  onMeeting(): Observable<Meeting> {
    return this.socket.fromEvent('meeting')
        .map((res: any) => new Meeting(res));
  }

  onMeetings(): Observable<Meeting[]> {
    this.socket.emit('requestmeetings', {});

    return this.socket.fromEvent('meetings')
        .map((res: any) => res.map(data => new Meeting(data)));
  }

  emitNewMeeting(metting: Meeting) {
    this.socket.emit('newmeeting', metting);
  }

  emitUpdateMeeting(metting: Meeting) {
    this.socket.emit('updatemeeting', metting);
  }

}