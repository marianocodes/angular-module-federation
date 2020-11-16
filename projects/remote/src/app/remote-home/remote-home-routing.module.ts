import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoteHomeComponent } from './remote-home.component';

const routes: Routes = [
  { path: 'remote', component: RemoteHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteHomeRoutingModule { }
