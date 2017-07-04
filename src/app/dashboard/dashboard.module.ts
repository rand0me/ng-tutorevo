import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { environment } from "../../environments/environment";

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const socketIoConfig: SocketIoConfig = { url: environment.socketUrl, options: {} };

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChatComponent }          from './chat/chat.component';
import { ChatService }            from './shared/chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent],
  providers: [ChatService]
})
export class DashboardModule { }
