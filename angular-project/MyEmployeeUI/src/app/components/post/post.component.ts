import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data=>{
        this.posts = data;
        this.postService.post$.next(this.posts);
    });
  }

  deletePost(postId){
    this.postService.deletePost(postId).subscribe(data=>{
        this.posts = this.posts.filter(p=>p.id !== postId);
        this.postService.post$.next(this.posts);
    });
  }


}
