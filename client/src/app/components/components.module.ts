import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    AvatarSelectorComponent
  ],
  exports: [
    PostComponent,
    PostsComponent,
    AvatarSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
