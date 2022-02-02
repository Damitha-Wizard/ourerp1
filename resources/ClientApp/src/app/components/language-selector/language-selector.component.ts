import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  Languages:string[]=[];
  CurrentLanguage:string='en';

  constructor(private translateService:TranslateService) { 
    translateService.addLangs(['en','si','chi']);
    translateService.setDefaultLang('en');
    translateService.use('en');
    this.Languages = translateService.getLangs();
  }

  ngOnInit(): void {

  }

  switchLang(lang: string) {
    this.CurrentLanguage=lang;
    this.translateService.use(lang);
  }

}
