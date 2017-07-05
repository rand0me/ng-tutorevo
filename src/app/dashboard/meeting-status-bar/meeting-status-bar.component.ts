import { Component, Input, OnInit }  from '@angular/core';

import { MeetingService }     from "../shared/meeting.service";
import { Meeting }            from "../shared/meeting.model";

@Component({
  selector: 'app-meeting-status-bar',
  templateUrl: './meeting-status-bar.component.html',
  styleUrls: ['./meeting-status-bar.component.css']
})
export class MeetingStatusBarComponent implements OnInit {
  @Input('meeting') meeting: Meeting;

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
  }

  onChange() {
    this.meetingService.emitUpdateMeeting(this.meeting);
  }

}
