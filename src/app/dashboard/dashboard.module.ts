import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const socketIoConfig: SocketIoConfig = { url: 'http://192.168.5.46:3000', options: {} };

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
