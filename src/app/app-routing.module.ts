import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousDetailComponent } from './anonymous/anonymous-detail/anonymous-detail.component';

const routes: Routes = [
  {path: 'anonymous-detail', component: AnonymousDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [AnonymousDetailComponent]