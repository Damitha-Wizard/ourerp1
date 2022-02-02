import { Component, OnInit, Input } from '@angular/core';
import { AdDirective } from 'src/app/directives/ad.directive';


import { AdInterface } from '../../interfaces/AdInterface';


@Component({
  selector: 'app-ad-job-component',
  templateUrl: './ad-job-component.component.html',
  styleUrls: ['./ad-job-component.component.scss']
})
export class AdJobComponentComponent implements AdInterface {

  @Input() data: any;

 
  
  constructor() { }
  
  

  ngOnInit(): void {
  }

}
