import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { AdItem } from 'src/app/classes/AdItem';
import { AdDirective } from 'src/app/directives/ad.directive';
import { AdJobComponentComponent } from '../ad-job-component/ad-job-component.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements AfterViewInit, OnDestroy  {

  @Input() ads: AdItem[] = [];


  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: any|undefined;


  constructor() { }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdJobComponentComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  

}
