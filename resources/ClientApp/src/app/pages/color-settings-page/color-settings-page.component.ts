import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { WindowRefService, ICustomWindow  } from '../../services/WindowInjectorService';

@Component({
  selector: 'app-color-settings-page',
  templateUrl: './color-settings-page.component.html',
  styleUrls: ['./color-settings-page.component.scss']
})
export class ColorSettingsPageComponent implements OnInit {

  jQueryUIThemes:any[]=[];
  CurrentjQueryUITheme:string='';

  constructor(private httpClient:HttpClient,private cookieService:CookieService,private windowRef:WindowRefService) { 
    httpClient.get(environment.url+'/public/get-jquery-themes', { responseType:'json' }).subscribe((response:any)=>{
      this.jQueryUIThemes=response;
      //console.log(response);
      this.CurrentjQueryUITheme = this.cookieService.get('jQueryUITheme');
      console.log(this.CurrentjQueryUITheme);
    });
  }

  ngOnInit(): void {
    
  }

  jQueryUIThemeChanged(eventArgs:any){
    //console.log(eventArgs.target.value);

    this.cookieService.set('jQueryUITheme',eventArgs.target.value);
    //this.windowRef.nativeWindow.location.reload();
  }

}
