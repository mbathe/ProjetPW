import { Injectable,EventEmitter} from "@angular/core";
@Injectable()
export class CommunicationService {
    // 1
    heure:string;
    temperature:string;
    icon:string;
    location:string;
    description:string;
    pluviometrie:string;
    humidity:string;
    result:any;

    receivedHeure:EventEmitter<string>;
    receivedTemp:EventEmitter<string>;
    receivedIcon:EventEmitter<string>;
    receivedDesc:EventEmitter<string>;
    receivedLocation:EventEmitter<string>;
    receivedPluv:EventEmitter<string>;
    receivedHum:EventEmitter<string>;
    receivedResult:EventEmitter<any>;
    constructor() {
        this.receivedHeure= new EventEmitter<string>();
        this.receivedTemp= new EventEmitter<string>();
        this.receivedIcon= new EventEmitter<string>();
        this.receivedDesc= new EventEmitter<string>();
        this.receivedLocation= new EventEmitter<string>();
        this.receivedPluv= new EventEmitter<string>();
        this.receivedHum= new EventEmitter<string>();
        this.receivedResult=new EventEmitter<any>();
    }
    // 2
    raiseHeure(heure:string):void {
        this.heure = heure;
        this.receivedHeure.emit(heure);
    }
    raiseTemp(temperature:string){
        this.temperature=temperature;
        this.receivedTemp.emit(temperature);
    }
    raiseIcon(icon:string){
        this.icon=icon;
        this.receivedIcon.emit(icon);
    }
    raiseLocation(location:string){
        this.location=location;
        this.receivedLocation.emit(location);
    }
    raiseDescription(description:string){
        this.description=description;
        this.receivedDesc.emit(description);

    }
    raisePluviometrie(pluviometrie:string){
        this.pluviometrie=pluviometrie;
        this.receivedPluv.emit(pluviometrie);

    }
    raiseHumidity(humidity:string){
        this.humidity=humidity;
        this.receivedHum.emit(humidity);
    }
    raiseResult(result:any){
      this.result=result;
      this.receivedResult.emit(result);
    }

}