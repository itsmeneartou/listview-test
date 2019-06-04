import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import {Algolia} from "nativescript-algolia";
import { ListView } from "tns-core-modules/ui/list-view";
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
  listView:ListView;
  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit() {
    console.log('ngOnInit in events');
    index.search('',(content, err)=> {
      if(err==null){
        if(content.hits!=null){
          this.events=new Array<any>(); 
         
          content.hits.forEach(hit=>this.events.push(hit));
          if(this.events.length>0)console.log('events lngth=',this.events.length);
        }       
        if(this.listView!=null){
          console.log('events list view is not null');
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
    console.log('listview loaded in events');
    }

    onItemTap($event){
      console.log('item tapped in events',$event.index);
    }
    onSetupItemView($event){
      console.log('onSetup called in events')
    }

}
