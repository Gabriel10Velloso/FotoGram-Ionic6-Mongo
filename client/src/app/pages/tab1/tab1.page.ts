import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];
  habilitado = true;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.siguientes();
  }

  recargar(event) {
    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];
  }

  siguientes(event?, pull: boolean = false) {
    this.postService.getPosts(pull)
      .subscribe((resp: any) => {

        console.log(resp);
        this.posts.push(...resp.posts);

        if (event) {
          event.target.complete();

          if (resp.posts.length === 0) {
            this.habilitado = false;
          }
        }
      });
  }

}
