import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(res => {
        console.log(res);
      });
  }
}
