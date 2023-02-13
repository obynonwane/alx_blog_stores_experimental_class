import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './postService/post.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Blogs Stories';
  posts: any = [];

  constructor(private postService: PostService) {}

  async ngOnInit(): Promise<void> {
    const response = await this.postService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }
}
