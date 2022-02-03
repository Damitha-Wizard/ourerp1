import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { WindowRefService, ICustomWindow  } from '../../services/WindowInjectorService';

declare var $:any;

@Component({
  selector: 'app-color-settings-page',
  templateUrl: './color-settings-page.component.html',
  styleUrls: ['./color-settings-page.component.scss']
})
export class ColorSettingsPageComponent implements OnInit, AfterViewInit {

  jQueryUIThemes:any[]=[];
  CurrentjQueryUITheme:string='';

  constructor(private httpClient:HttpClient,private cookieService:CookieService,private windowRef:WindowRefService) { 
    
  }

  ngAfterViewInit(){

    this.httpClient.get(environment.url+'/public/get-jquery-themes', { responseType:'json' }).subscribe((response:any)=>{
      this.jQueryUIThemes=response;
      //console.log(response);
      this.httpClient.get(environment.url+'/public/get-jquery-theme', { responseType:'text' }).subscribe((response:string)=>{
        
        this.CurrentjQueryUITheme = response;
        
        setTimeout(()=>{
          $('#cbojQueryUITheme').selectmenu({ value:this.CurrentjQueryUITheme });
          $('#cbojQueryUITheme').on('selectmenuchange', this.jQueryUIThemeChanged);
          
        },100);
        
      });
      
      setTimeout(()=>{
        $('#cbojQueryUITheme').selectmenu({ value:this.CurrentjQueryUITheme });
        $('#cbojQueryUITheme').on('selectmenuchange', this.jQueryUIThemeChanged);
        
      },100);
      
    });

  }

  ngOnInit(): void {
    
  }

  jQueryUIThemeChanged(eventArgs:any){
      
      /* 
      //alert(eventArgs.target.value);
      let httpHeaders = new HttpHeaders();
      httpHeaders.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    
      
      
      this.httpClient.post(environment.url+'/public/set-jquery-themes', { jQueryUITheme:eventArgs.target.value }, { headers:httpHeaders, responseType:'text' }).subscribe((response:string)=>{
        
        this.windowRef.nativeWindow.location.reload();
        
      }); 
      
      */

      

      $.ajax({
        url:'/ourerp/public/set-jquery-theme',
        type:'post',
        data:{
          'jQueryUITheme':eventArgs.target.value
        },
        dataType:'text',
        headers:{
          'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
        },
        success:function (data:any, textStatus:string, jqXHR:any){
          window.location.reload();
        }
      }); 

     
    
  }

}
