import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import {Algolia} from "nativescript-algolia";
import { ListView } from "tns-core-modules/ui/list-view";
import { Subject } from 'rxjs';
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
  players$:Subject<any[]>=new Subject();
  listView:ListView;
  constructor(private ref:ChangeDetectorRef,private ngZone:NgZone) { }

  ngOnInit() {
  console.log('ngOnInit in players');
   
      index.search('',(content, err)=> {
        if(err==null){
          if(content.hits!=null){
           let newPlayers= [];
            content.hits.forEach(hit=>newPlayers.push(hit));
            this.players=newPlayers;
            if(newPlayers.length>0)console.log('players length>0');
            this.ngZone.run(() => {
              console.log(newPlayers.length,' new players length');
              this.players$.next(newPlayers);
              this.ref.detectChanges();       
              if(this.listView!=null){
                console.log('list view is not null');
                this.listView.refresh();
                
              }
          });
           
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
    console.log('listview loaded in players');
    }

    onItemTap($event){
      console.log('item tapped in players',$event.index);
    }
    onSetupItemView($event){
      console.log('onSetup called in players');
  
    }

}
