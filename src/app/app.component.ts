import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './postService/post.service';
import { ContactService } from './contact/contact.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Blogs Stories';
  posts: any = [];
  allUser: any = {};
  phone = '+2348167365693';

  constructor(
    private postService: PostService,
    private contactService: ContactService
  ) {}

  async ngOnInit(): Promise<void> {
    const response = await this.postService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }

  sendMessage(message: any) {
    console.log(message);
    this.contactService
      .sendMessage({ phone: '+2348080690000' })
      .subscribe((data) => {
        console.log(data);
      });
  }
  submitUser(user: any): void {
    console.log(user);

    this.createPost();
    this.allUser = user;
  }

  async createPost() {
    const response = this.postService
      .createPost({ phone: this.phone })
      .subscribe((data) => {
        this.posts = data;
        console.log(data);
      });
  }
}
