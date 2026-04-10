import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, POSTS } from '../data/posts';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }

  private postsUrl = `${environment.apiUrl}v1/posts`;
  getPosts(): Observable<Post[]> {
    // return of(POSTS);
    return this.http.get<Post[]>(this.postsUrl);
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
