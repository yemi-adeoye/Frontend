import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn:'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

  getAllPosts():Observable<Post[]> { //we get observable whenever an api is called.
     return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts') ;
  }

  getCommentsByPostId(postId: number) : Observable<Comments[]>{
     return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments?postId='+postId);
  }
}
