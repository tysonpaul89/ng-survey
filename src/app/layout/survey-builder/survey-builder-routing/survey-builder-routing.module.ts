import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderPageComponent } from '../builder-page/builder-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuilderPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SurveyBuilderRoutingModule { }
