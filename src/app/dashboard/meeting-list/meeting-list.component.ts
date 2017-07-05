import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from "@angular/router";

import { MeetingService }     from "../shared/meeting.service";
import { Meeting }            from "../shared/meeting.model";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.meetingService.onMeetings()
        .subscribe(meetings => this.meetings.push(...meetings));
  }

}
