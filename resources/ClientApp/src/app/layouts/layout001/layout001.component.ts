import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout001',
  templateUrl: './layout001.component.html',
  styleUrls: ['./layout001.component.scss']
})
export class Layout001Component implements OnInit, AfterViewInit {

  @Input() data: any;

  constructor() { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {

  }

}
