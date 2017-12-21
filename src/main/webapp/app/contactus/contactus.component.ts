
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'yuqar-contactus',
    templateUrl: './contactus.component.html',
    styleUrls:[
        'contactus.style.scss'
    ]
})
export class ContactusComponent{
    name: string;
    email: string;
    contact: string;
    comment: string;

    sendContact(){

    }
    reset(){
        this.name="";
        this.email="";
        this.contact="";
        this.comment="";
    }
}
