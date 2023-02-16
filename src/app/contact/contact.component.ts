import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  body: string = '';

  message = {};

  @Output() messageData: EventEmitter<any> = new EventEmitter();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  sendMessage() {
    this.message = {
      firstname: this.firstname,
      lastname: this.lastname,
      body: this.body,
    };

    this.emitToParent();
    this.clearForms();
  }

  emitToParent() {
    this.messageData.emit(this.message);
  }

  clearForms() {
    this.firstname = '';
    this.lastname = '';
    this.body = '';
  }
}
