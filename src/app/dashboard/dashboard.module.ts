import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { environment }    from "../../environments/environment";

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const socketIoConfig: SocketIoConfig = {url: environment.socketUrl, options: {}};

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MeetingListComponent }   from './meeting-list/meeting-list.component';
import { MeetingNewComponent }    from './meeting-new/meeting-new.component';

import { MeetingService }             from "./shared/meeting.service";
import { MeetingStatusBarComponent }  from "./meeting-status-bar/meeting-status-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  declarations: [
    MeetingListComponent,
    MeetingNewComponent,
    MeetingStatusBarComponent
  ],
  providers: [MeetingService]
})
export class DashboardModule {
}
