import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  email: string = '';
  body: string = '';
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}

  submitForm() {
    const user = {
      email: this.email,
      body: this.body,
    };

    //emit the data to parent component
    console.log(user);
    this.addUser.emit(user);
    this.email = '';
    this.body = '';
  }
}
