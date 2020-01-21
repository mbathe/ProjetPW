import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import{CommunicationService} from '../app.communication.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  heure:string;
  @Input()
  temperature:string;
  @Input()
  pluviometrie:string;
  @Input()
  iconId:string;
  @Input()
  humidity:string;
  @Input()
  location:string;
  @Input()
  description:string;
  @Input()
  index:number;

  url:string="assets/icons/"+"unknown"+".png";
  constructor(private serv:CommunicationService){ 
  }
  //------------------------javascript--------------------------------
   

  //---------------------------end java script------------------------

  ngOnInit() {
    this.url="assets/icons/"+this.iconId+".png";
  }
  charger() {
    this.serv.raiseHeure(this.heure);
    this.serv.raiseTemp(this.temperature);
    this.serv.raiseIcon(this.url);
    this.serv.raiseDescription(this.description);
    this.serv.raiseLocation(this.location);
    this.serv.raisePluviometrie(this.pluviometrie);
    this.serv.raiseHumidity(this.humidity);
  }
  charge1(){
    if(this.index==1){
    this.serv.raiseHeure(this.heure);
    this.serv.raiseTemp(this.temperature);
    this.serv.raiseIcon(this.url);
    this.serv.raiseDescription(this.description);
    this.serv.raiseLocation(this.location);
    this.serv.raisePluviometrie(this.pluviometrie);
    this.serv.raiseHumidity(this.humidity);
    }
  }
}
