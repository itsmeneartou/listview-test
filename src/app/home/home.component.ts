import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListView } from "tns-core-modules/ui/list-view";

let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit,OnChanges {
  title = 'listview-test';
  players:Array<any>;
  listView:ListView;
  constructor(
    private ref: ChangeDetectorRef) {
      this.players = [];

      for (let i = 0; i < europianCountries.length; i++) {
        this.players.push({name:europianCountries[i]});
    }
     }

    ngOnChanges(changes:SimpleChanges){
      console.log(changes);
    }

  ngAfterViewInit() {
    
   
    
  }
  onListViewLoaded(args){
    this.listView = args.object as ListView;
    this.listView.refresh();
    console.log('hede');
    }

    onItemTap($event){
      console.log('item tapped',$event.index);
    }
    onSetupItemView($event){
      console.log('onSetup',$event)
    }
  
}
