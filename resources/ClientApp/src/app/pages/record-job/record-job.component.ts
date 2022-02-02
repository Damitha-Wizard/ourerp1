import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// import * as $ from 'jquery';
declare var $:any;

import { WindowRefService, ICustomWindow  } from '../../services/WindowInjectorService';

@Component({
  selector: 'app-record-job',
  templateUrl: './record-job.component.html',
  styleUrls: ['./record-job.component.scss']
})
export class RecordJobComponent implements OnInit, AfterViewInit {

  SentBy:string='';
  ReceivedAt:Date=new Date();
  ReceivedDate:string='';
  ReceivedTime:string='';
  ReceivedBy:string='';
  ApiBearerToken:string='';
  Users:any[]=[];
  JobTitle:string='';
  ExpectedDate:string='';
  ExpectedTime:string='';
  Priority:number=0;
  DontUpdatePriorityTextBox:boolean=false;
  DontUpdatePrioritySlider:boolean=false;
  CurrentStatus:string='';

  constructor(private windowRef: WindowRefService,private httpClient:HttpClient) { }

  ngAfterViewInit(): void {

    $('#dpReceivedDate').datepicker({ dateFormat: 'yy-mm-dd' });
    $('#tpReceivedTime').timepicker();

    $('#dpExpectedDate').datepicker({ dateFormat: 'yy-mm-dd' });
    $('#tpExpectedTime').timepicker();

    /* $('tpReceivedTime').on('focus',function(){
      setTimeout(()=>{
        $('ul.ui-timepicker-viewport li#ui-menu-item a.ui-active-item').css('backgroundColor','black');
      },500);
      
    }); */

    this.httpClient.get(environment.url+'/public/api/get-api-token').subscribe((response:any)=>{
        //console.log(response);
        this.ApiBearerToken=response.token;
        //alert(this.ApiBearerToken);
        this.httpClient.get(environment.url+'/public/api/users').subscribe((response:any)=>{
            console.log(response);
            let userResources=response.data;
            userResources.forEach((element:any) => {
              let IdNameEmail={ id:element.data.id, person:element.data.attributes.name + ' -> ' + element.data.attributes.email };
              this.Users.push(IdNameEmail);
            });
            setTimeout(()=>{
                $('#cboReceivedBy').selectmenu();
                $('.BigForm #cboReceivedBy-button').css('width','100%');
            },50);
        });
    });

    

    $('#sliderPriority').slider({
      min:0,
      max:100,
      slide:this.refreshPriority,
      change: this.refreshPriority
    });

  }

  ngOnInit(): void {
    
  }

  TimePickerFocussed(){
    
  }

  refreshPriority(eventArgs:any,slider:any){
    if(!this.DontUpdatePriorityTextBox){
      $('#txtPriority').val(slider.value);
    }else{
      this.DontUpdatePriorityTextBox=false;
    }
    
  }

  updatePrioritySlider(){
    let NewValue:number=$('#txtPriority').val();
    if(NewValue<0){
      NewValue=0;
    }else if(NewValue>100){
      NewValue=100;
    }
    if(!this.DontUpdatePrioritySlider){
      $('#sliderPriority').slider('value',NewValue);
    }else{
      this.DontUpdatePrioritySlider=false;
    }
  }

}
