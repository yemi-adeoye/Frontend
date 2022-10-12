import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postId: number;
  postForm: FormGroup;
  post: Post;
  msg: string;
  constructor(private actRoute: ActivatedRoute,
    private postService: PostService , private router: Router) { }

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.params['id'];
    this.postForm = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9 _-]+$/)]),
      body: new FormControl('', Validators.required ),
      userId: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)])
    });

    this.postService.getPostById(this.postId).subscribe(data=>{
      this.post = data;
      this.postForm = new FormGroup({
        title: new FormControl(this.post.title,[Validators.required, Validators.pattern(/^[a-zA-Z0-9 _-]+$/)]),
        body: new FormControl(this.post.body,Validators.required),
        userId: new FormControl(this.post.userId,[Validators.required, Validators.pattern(/^[0-9]+$/)])
      });
    });
  }

  onFormSubmit(){
    this.post = {
      id: this.postId,
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      userId: this.postForm.value.userId
    }
     this.postService.editPost(this.post).subscribe(data=>{
        //this.router.navigateByUrl('/posts'); -- go to /posts
        this.msg='Post Updated!!';
     });
  }
}
