import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorSettingsPageComponent } from './pages/color-settings-page/color-settings-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LongPageComponent } from './pages/long-page/long-page.component';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';
import { RecordJobComponent } from './pages/record-job/record-job.component';
import { ShortPageComponent } from './pages/short-page/short-page.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'permissions', component:PermissionsPageComponent },
  { path:'long-page', component:LongPageComponent },
  { path:'short-page', component:ShortPageComponent },
  { path:'record-job', component:RecordJobComponent },
  { path:'color-settings', component:ColorSettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
