import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId:number;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.params['id'];
    console.log(this.postId);
  }

}
