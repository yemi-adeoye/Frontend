import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comments } from '../models/comments.model';
import { Post } from '../models/post.model';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn:'root'
})
export class PostService {

  post$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  getAllPosts():Observable<Post[]> { //we get observable whenever an api is called.
     return this.http.get<Post[]>(environment.serverUrl +'/posts') ;
  }

  getCommentsByPostId(postId: number) : Observable<Comments[]>{
     return this.http.get<Comments[]>(environment.serverUrl +'/comments?postId='+postId);
  }

  deletePost(postId: number) :Observable<any>{
     return this.http.delete(environment.serverUrl +'/posts/'+postId);
  }

  insertPost(post: Post) : Observable<Post> {
     return this.http.post<Post>(environment.serverUrl +'/posts', post);
  }

  getPostById(postId: number):Observable<Post> {
     return this.http.get<Post>(environment.serverUrl +'/posts/'+postId);
  }

  editPost(post: Post) : Observable<Post>{
     return this.http.put<Post>(environment.serverUrl +'/posts/'+post.id,post );
  }
}
