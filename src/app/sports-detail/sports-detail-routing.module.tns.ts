import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import {SportsDetailComponent} from './sports-detail/sports-detail.component';
import {PlayersListComponent} from './players-list/players-list.component';
import {EventsListComponent} from './events-list/events-list.component';
const routes: Routes = [  {path:"",redirectTo:"default",pathMatch:"full"},
{ path: "default", component: SportsDetailComponent,children:[
  { path: "players", component: PlayersListComponent,outlet:"playersTab" },
  { path: "eventRequests", component: EventsListComponent, outlet: "eventRequestsTab" }
]},];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SportsDetailRoutingModule { }
