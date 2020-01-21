import {Component} from '@angular/core'

@Component({
    selector:'app-first',
    templateUrl:'./firstComponent.component.html',
    styleUrls: ['./firstComponent.component.css']
})

export class FirstComponent{
    donnee:string;
    donnees:string;
    constructor(){
        this.donnee='{"heure":"12:30","temperature":35, "pluviometrie":"40","humidity":"96"}';
        this.donnees='{ "ville" : [' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"01d"},'+
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"01n"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"02d"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"01n"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"04d"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"02d"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"02d"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"02d"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"hot","icon":"02n"},' +
        '{"heure":"7:30","temperature":35, "pluviometrie":"40","humidity":"96","location":"yaounde","description":"cold","icon":"02d"} ]}';
    }
}