import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-stat',
  templateUrl: './post-stat.component.html',
  styleUrls: ['./post-stat.component.css']
})
export class PostStatComponent implements OnInit {

  totalPosts: number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data=>{
      this.totalPosts = data.length;
    });
  }

}
