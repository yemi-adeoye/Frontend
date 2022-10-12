import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId:number;
  comments: Comments[];
  constructor(private actRoute: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.params['id'];
    this.postService.getCommentsByPostId(this.postId)
      .subscribe(data=>{
          this.comments = data;
      });
  }

}
