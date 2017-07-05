import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from "@angular/router";

import { Meeting }            from "../shared/meeting.model";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.forEach((data: { meetings: Meeting[] }) => {
      this.meetings.push(...data.meetings);
    });
  }

}
