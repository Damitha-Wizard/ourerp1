import { Component } from '@angular/core';
import { AdItem } from './classes/AdItem';
import { AdService } from './services/AdService.service';
import { LayoutsService } from './services/LayoutsService.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Damitha';

  constructor(private translateService:TranslateService,private layoutsService: LayoutsService) {
    translateService.addLangs(['en']);
    translateService.setDefaultLang('en');
  }

  OnButtonClick(){
    
  }

  ads: AdItem[] = [];
  
  Layouts: AdItem[] = [];
  

  ngOnInit() {
    //this.ads = this.adService.getAds();
    this.Layouts = this.layoutsService.getLayouts();
  }
}
