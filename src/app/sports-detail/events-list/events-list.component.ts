import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import {Algolia} from "nativescript-algolia";
import { ListView } from "tns-core-modules/ui/list-view";
import { Subject } from 'rxjs';
var client = new Algolia('702V7C2Q3E', 'aa6e6b1af25d06c9d5def0c1de7e6a36');
var index = client.initIndex('playing_requests');

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EventsListComponent implements OnInit {
 
  events:Array<any>=new Array<any>();
  events$:Subject<any>=new Subject();
  listView:ListView;
  constructor(private ref:ChangeDetectorRef,private ngZone:NgZone) { }

  ngOnInit() {
    console.log('ngOnInit in events');
   
      index.search('',(content, err)=> {
        if(err==null){
          if(content.hits!=null){
            let newEvents=[];
            content.hits.forEach(hit=>newEvents.push(hit));
            this.events=newEvents;
            this.ngZone.run(()=>{
              console.log(newEvents.length,' new events length');
              this.events$.next(newEvents)
              this.ref.detectChanges();       
              if(this.listView!=null){
                console.log('list view is not null');
                this.listView.refresh();
               
              }
            })
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
    console.log('listview loaded in events');
    }

    onItemTap($event){
      console.log('item tapped in events',$event.index);
    }
    onSetupItemView($event){
      console.log('onSetup called in events');
  
    }

}
