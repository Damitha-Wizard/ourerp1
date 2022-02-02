import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WindowRefService } from '../app/services/WindowInjectorService';

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { MaterialModule } from './angular-material';
import { Layout001Component } from './layouts/layout001/layout001.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdJobComponentComponent } from './components/ad-job-component/ad-job-component.component';
import { AdService } from './services/AdService.service';
import { AdDirective } from './directives/ad.directive';
import { LayoutLoaderComponent } from './components/layout-loader/layout-loader.component';
import { LayoutsService } from './services/LayoutsService.service';
import { HomeComponent } from './pages/home/home.component';
import { LongPageComponent } from './pages/long-page/long-page.component';
import { ShortPageComponent } from './pages/short-page/short-page.component';
import { LogoutMenuComponent } from './components/logout-menu/logout-menu.component';
import { JobMenuComponent } from './components/job-menu/job-menu.component';
import { MessegeService } from '../app/services/MessegeService';
import { RecordJobComponent } from './pages/record-job/record-job.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';



import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { DeveloperMenuComponent } from './components/developer-menu/developer-menu.component';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.url + '/resources/ClientApp/dist/client-app/assets/i18n/', '.json?'+(new Date()).getMilliseconds.toString);
}

export const DateFormats = {
  parse: {
      dateInput: ['YYYY-MM-DD']
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    Layout001Component,
    AdBannerComponent,
    AdJobComponentComponent,
    AdDirective,
    LayoutLoaderComponent,
    HomeComponent,
    LongPageComponent,
    ShortPageComponent,
    LogoutMenuComponent,
    JobMenuComponent,
    RecordJobComponent,
    LanguageSelectorComponent,
    DeveloperMenuComponent,
    PermissionsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ { provide: MAT_DATE_FORMATS, useValue: DateFormats },MessegeService, WindowRefService, AdService, LayoutsService, Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
