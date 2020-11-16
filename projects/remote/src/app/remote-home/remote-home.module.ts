import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteHomeRoutingModule } from './remote-home-routing.module';
import { RemoteHomeComponent } from './remote-home.component';

@NgModule({
  imports: [
    CommonModule,
    RemoteHomeRoutingModule
  ],
  declarations: [RemoteHomeComponent]
})
export class RemoteHomeModule { }
