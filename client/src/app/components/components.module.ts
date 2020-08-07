import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  exports: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
