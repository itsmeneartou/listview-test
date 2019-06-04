import { Component, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListView } from "tns-core-modules/ui/list-view";
import {sportsList} from '../../assets/rtdb_data/sports-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit,OnChanges {
  title = 'Available Sports';
  sports:Array<any>=new Array<any>();
  listView:ListView;
  constructor(
   ) {
           
    this.sports=Object.keys(sportsList).map(key=>{

      let sport= sportsList[key];
      sport.imageSource = "../assets/" + sport.name + ".svg";
      return sport;
     });
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
      console.log('onSetup called')
    }
  
}
