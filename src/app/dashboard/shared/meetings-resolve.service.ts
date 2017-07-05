import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { MeetingService } from './meeting.service';
import { Meeting }        from "./meeting.model";


@Injectable()
export class MeetingsResolve implements Resolve<any> {

  constructor(private meetingService: MeetingService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Meeting[]> {
    return this.meetingService.onMeetings()
      .take(1);
  }
}
