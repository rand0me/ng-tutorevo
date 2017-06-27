import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChatComponent }          from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})
export class DashboardModule { }
