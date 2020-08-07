import { NgModule } from '@angular/core';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { DomSanitizerPipe } from './dom-sanitizer-pipe.pipe';

@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImageSanitizerPipe,
    ImagenPipe
  ],
  exports: [
    DomSanitizerPipe,
    ImageSanitizerPipe,
    ImagenPipe
  ]
})
export class PipesModule { }
