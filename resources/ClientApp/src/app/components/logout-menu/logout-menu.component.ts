import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import * as $ from 'jquery';

import { WindowRefService, ICustomWindow  } from '../../services/WindowInjectorService';
import { MessegeService } from 'src/app/services/MessegeService';

import * as uuid from 'uuid';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-logout-menu',
  templateUrl: './logout-menu.component.html',
  styleUrls: ['./logout-menu.component.scss']
})
export class LogoutMenuComponent implements OnInit,AfterViewInit {

  MyID:string='';
  
  MenuIsShown:boolean=false;

  constructor(private translateService:TranslateService,private windowRef: WindowRefService, private httpClient:HttpClient, private messegeService:MessegeService) { }
  
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

  OpenLogoutMenu(){
    var Messege:any={ cmd:"closeAllOtherPopupMenus", ThisOne:this.MyID };
    
    this.messegeService.sendMessage(JSON.stringify(Messege));
  }

  Logout(){

    var httpHeaders:HttpHeaders=new HttpHeaders();
    httpHeaders.append('Accept','application/json');

    this.httpClient.post(environment.url + '/public/logout', { '__token': $('input[name="__token"]').val() }, { headers: httpHeaders }).subscribe((response:any)=>{

    });

    this.httpClient.post(environment.url+'/public/api/logout',null, { headers: httpHeaders }).subscribe((response:any)=>{
        
    });

    this.windowRef.nativeWindow.setTimeout(()=>{
      /* let Uuid:string = uuid.v4();
      Uuid=Uuid.replace("-",""); */
      this.windowRef.nativeWindow.location.reload();
    },50);

  }

  ShowProfile(){

  }

}
