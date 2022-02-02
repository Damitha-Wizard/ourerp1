import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as $ from 'jquery';
import { MessegeService } from 'src/app/services/MessegeService';

import * as uuid from 'uuid';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-developer-menu',
  templateUrl: './developer-menu.component.html',
  styleUrls: ['./developer-menu.component.scss']
})
export class DeveloperMenuComponent implements OnInit,AfterViewInit  {

  MyID:string='';
  MenuIsShown:boolean=false;
  ImageUrl:string=environment.url + "/resources/ClientApp/dist/client-app/assets/Job.jpg";

  constructor(private translateService:TranslateService,private messegeService:MessegeService,private router:Router) { }


  ngAfterViewInit(): void {

    this.MyID = uuid.v4();
    this.MyID=this.MyID.replace("-","");
    this.messegeService.onMessage().subscribe((messege:string)=>{
      var Messege=JSON.parse(messege);
      if(Messege.ThisOne==this.MyID&&Messege.cmd=="closeAllOtherPopupMenus"){
        this.MenuIsShown=!this.MenuIsShown;
      }else if(Messege.ThisOne!=this.MyID&&Messege.cmd=="closeAllOtherPopupMenus"){
        this.MenuIsShown=false;
      }
    });

  }

  ngOnInit(): void {

    

  }

  OpenDeveloperMenu(){
    var Messege:any={ cmd:"closeAllOtherPopupMenus", ThisOne:this.MyID };
    
    this.messegeService.sendMessage(JSON.stringify(Messege));
  }

  ShowPermissionPage(){
    this.router.navigate(['permissions']);
  }

  ShowLongPage(){
    this.router.navigate(['long-page']);
  }

  ShowShortPage(){
    this.router.navigate(['short-page']);
  }

}
