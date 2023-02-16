import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/posts';

  getPost() {
    return this.http.get(this.url);
  }

  createPost(data: any) {
    const url = 'http://localhost:5000/api/v1/auth/get-phone-token';
    return this.http.post(url, data);
  }
}
