import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {Algolia} from "nativescript-algolia";
import { ListView } from "tns-core-modules/ui/list-view";
var client = new Algolia('702V7C2Q3E', 'aa6e6b1af25d06c9d5def0c1de7e6a36');
var index = client.initIndex('players');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit,OnChanges {
  title = 'listview-test';
  players:Array<any>=new Array<any>();
  listView:ListView;
  constructor(
    private ref: ChangeDetectorRef) {


     
     }

    ngOnChanges(changes:SimpleChanges){
      console.log(changes);
    }

  ngAfterViewInit() {
    
    index.search('',(content, err)=> {
      if(err==null){
        if(content.hits!=null){
          this.players=new Array<any>();
         
          content.hits.forEach(hit=>this.players.push(hit));
          if(this.players.length>0)console.log('players length=',this.players.length);
        }       
        if(this.listView!=null){
          console.log('list view is not null');
          this.listView.refresh();
          console.log('list view size',this.listView.getActualSize());
          this.ref.markForCheck();
        }
      }
      else{
        console.log('error',err);
      }

    });
    
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
