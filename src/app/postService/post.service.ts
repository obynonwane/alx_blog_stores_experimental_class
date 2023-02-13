import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/posts';

  getPost() {
    return this.http.get(this.url);
  }
}
