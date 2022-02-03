import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

declare var $:any;

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit, AfterViewInit {

  Languages:string[]=[];
  CurrentLanguage:string='en';

  constructor(private translateService:TranslateService,private httpClient:HttpClient,private cookieService:CookieService) { 

    

  }

  ngAfterViewInit(){

    this.httpClient.get(environment.url+'/public/get-language', { responseType:'text' }).subscribe((response:string)=>{
      this.translateService.addLangs(['en','chi']);
      this.CurrentLanguage=response;
      this.translateService.setDefaultLang(this.CurrentLanguage);
      this.translateService.use(this.CurrentLanguage);
      this.Languages = this.translateService.getLangs();
    });

    

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
