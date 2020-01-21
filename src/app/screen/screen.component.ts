import { Component, OnInit } from '@angular/core';
import{CommunicationService} from '../app.communication.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {


receiveHeure:string;
receiveTemp:string;
receiveIcon:string;
receiveDesc:string;
receiveLocation:string; 
receivePluv:string;  
receiveHum:string; 

  constructor(private serv:CommunicationService) { }

  
  ngOnInit() {
      this.serv.receivedHeure.subscribe((param:string)=>{
      this.receiveHeure=param;

    });
    this.serv.receivedTemp.subscribe((param:string)=>{
      this.receiveTemp=param;

    });
    this.serv.receivedIcon.subscribe((param:string)=>{
      this.receiveIcon=param;

    });
    this.serv.receivedDesc.subscribe((param:string)=>{
      this.receiveDesc=param;

    });
    this.serv.receivedLocation.subscribe((param:string)=>{
      this.receiveLocation=param;

    });
    this.serv.receivedHum.subscribe((param:string)=>{
      this.receivePluv=param;

    });
    this.serv.receivedPluv.subscribe((param:string)=>{
      this.receiveHum=param;

    });
  }

}
