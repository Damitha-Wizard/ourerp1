import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

declare var $:any;

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  Languages:string[]=[];
  CurrentLanguage:string='en';

  constructor(private translateService:TranslateService,private httpClient:HttpClient,private cookieService:CookieService) { 

    translateService.addLangs(['en','chi']);
    this.CurrentLanguage=this.cookieService.get('Language');
    translateService.setDefaultLang(this.CurrentLanguage);
    translateService.use(this.CurrentLanguage);
    this.Languages = translateService.getLangs();

  }

  ngOnInit(): void {

  }

  switchLang(lang: string) {

    let httpHeaders = new HttpHeaders();
    httpHeaders.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
    
    this.httpClient.post(environment.url+'/public/set-language',{ Language:lang }, { headers:httpHeaders, responseType:'text' }).subscribe((response:string)=>{
      //console.log(response);

      this.CurrentLanguage=response;
      this.translateService.use(response);
    });

    
  }

}
