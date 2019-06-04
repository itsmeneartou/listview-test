import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SportsDetailRoutingModule } from './sports-detail-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SportsDetailComponent } from './sports-detail/sports-detail.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [SportsDetailComponent, PlayersListComponent, EventsListComponent],
  imports: [
    SportsDetailRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SportsDetailModule { }
