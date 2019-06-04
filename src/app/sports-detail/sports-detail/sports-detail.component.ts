import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
  selector: 'app-sports-detail',
  templateUrl: './sports-detail.component.html',
  styleUrls: ['./sports-detail.component.css']
})
export class SportsDetailComponent implements OnInit {

  constructor(    private activatedRoute: ActivatedRoute,
    private routerExtension: RouterExtensions) { }


  ngOnInit() {

      this.routerExtension.navigate(
        [{ outlets: { playersTab: ["players"], eventRequestsTab: ["eventRequests"] } }],
        { relativeTo: this.activatedRoute}
      );
    }
    catch(e){
      console.log(e.message);
    }
  
  }


