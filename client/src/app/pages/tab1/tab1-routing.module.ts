import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
