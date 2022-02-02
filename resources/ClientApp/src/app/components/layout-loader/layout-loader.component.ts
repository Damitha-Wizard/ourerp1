import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from 'src/app/classes/AdItem';
import { AdDirective } from 'src/app/directives/ad.directive';
import { LayoutsService } from 'src/app/services/LayoutsService.service';
import { Layout001Component } from '../../layouts/layout001/layout001.component';


@Component({
  selector: 'app-layout-loader',
  templateUrl: './layout-loader.component.html',
  styleUrls: ['./layout-loader.component.scss']
})
export class LayoutLoaderComponent implements OnInit,AfterViewInit {

  @Input() Layouts:AdItem[] = [];

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  constructor() { }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  ngOnInit(): void {
    
  }

  loadComponent() {
    
    const adItem = this.Layouts[0];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Layout001Component>(adItem.component);
    componentRef.instance.data = adItem.data;
    
  }

}
