import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";

import { MeetingService } from '../shared/meeting.service';
import { Meeting }        from "../shared/meeting.model";

@Component({
  selector: 'app-meeting-new',
  templateUrl: './meeting-new.component.html',
  styleUrls: ['./meeting-new.component.css']
})
export class MeetingNewComponent implements OnInit {
  meeting: Meeting = new Meeting({});

  constructor(private meetingService: MeetingService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.meetingService.emitNewMeeting(this.meeting);
    this.router.navigate(['/meetings']);
  }

}
