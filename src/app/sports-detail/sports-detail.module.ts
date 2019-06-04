import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsDetailRoutingModule } from './sports-detail-routing.module';
import { SportsDetailComponent } from './sports-detail/sports-detail.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [SportsDetailComponent, PlayersListComponent, EventsListComponent],
  imports: [
    CommonModule,
    SportsDetailRoutingModule
  ]
})
export class SportsDetailModule { }
