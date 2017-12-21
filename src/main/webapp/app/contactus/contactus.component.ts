
import {Component, OnInit} from "@angular/core";


@Component({
    selector: 'yuqar-contactus',
    templateUrl: './contactus.component.html',
    styleUrls:[
        'contactus.style.scss'
    ]
})
export class ContactusComponent{
    /*contact: Contact;

    constructor(private contactService: ContactService,private eventManager: JhiEventManager , private alertService: JhiAlertService){}

    sendContact(){
        this.contact.created_date = new Date();
      this.contactService.create(this.contact).subscribe((response: Contact)=> this.onSuccess(response),
          (error: Response)=>this.onError(error))
    }
    reset(){
        this.contact= null;
    }
    private onSuccess(res: Contact){
        this.eventManager.broadcast({ name: 'contactListModification', content: 'OK'})
    }
    private onError(error){
        this.alertService.error(error.message, null, null);
    }*/
}
