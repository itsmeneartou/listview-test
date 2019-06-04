import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef } from '@angular/core';
import {Algolia} from "nativescript-algolia";
import { ListView } from "tns-core-modules/ui/list-view";
var client = new Algolia('702V7C2Q3E', 'aa6e6b1af25d06c9d5def0c1de7e6a36');
var index = client.initIndex('players');


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PlayersListComponent implements OnInit {
  title = 'listview-test';
  players:Array<any>=new Array<any>();
  listView:ListView;
  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit() {
  console.log('ngOnInit in players');
    index.search('',(content, err)=> {
      if(err==null){
        if(content.hits!=null){
          this.players=new Array<any>(); 
         
          content.hits.forEach(hit=>this.players.push(hit));
          if(this.players.length>0)console.log('players lngth=',this.players.length);
        }       
        if(this.listView!=null){
          console.log('players list view is not null');
          this.listView.refresh();
          
        }
        this.ref.detectChanges();
       
      }
      else{
        console.log('error',err);
      }

    });
  }

  onListViewLoaded(args){
    this.listView = args.object as ListView;
    this.listView.refresh();
    console.log('listview loaded in players');
    }

    onItemTap($event){
      console.log('item tapped in players',$event.index);
    }
    onSetupItemView($event){
      console.log('onSetup called in players')
    }

}
