import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent }  from './navigation/navigation.component';
import { HomeComponent }        from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationComponent, HomeComponent],
  exports: [NavigationComponent, HomeComponent]
})
export class CoreModule { }
