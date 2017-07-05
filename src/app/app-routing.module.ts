import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: '/'
        }
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
