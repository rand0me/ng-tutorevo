import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatComponent }        from './chat/chat.component';
import { MeetingListComponent } from "./meeting-list/meeting-list.component";
import { MeetingNewComponent }  from "./meeting-new/meeting-new.component";
import { MeetingsResolve }      from "./shared/meetings-resolve.service";

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: 'meetings',
          component: MeetingListComponent
        },
        {
          path: 'meeting/new',
          component: MeetingNewComponent
        },
        {
          path: 'chat',
          component: ChatComponent
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
