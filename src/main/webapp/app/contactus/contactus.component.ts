import { Component } from '@angular/core';

@Component({
  selector: 'jhi-yuqar-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['contactus.style.scss']
})
export class ContactusComponent {
  name: string;
  email: string;
  contact: string;
  comment: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.contact = '';
    this.comment = '';
  }

  sendContact(): void {}
  reset(): void {
    this.name = '';
    this.email = '';
    this.contact = '';
    this.comment = '';
  }
}
