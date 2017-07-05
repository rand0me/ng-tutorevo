import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MeetingListComponent } from "./meeting-list/meeting-list.component";
import { MeetingNewComponent }  from "./meeting-new/meeting-new.component";
import { MeetingsResolve }      from "./shared/meetings-resolve.service";

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: 'meetings',
          component: MeetingListComponent,
          resolve: {
            meetings: MeetingsResolve
          }
        },
        {
          path: 'meeting/new',
          component: MeetingNewComponent
        }
      ]
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MeetingsResolve
  ]
})
export class DashboardRoutingModule {
}
