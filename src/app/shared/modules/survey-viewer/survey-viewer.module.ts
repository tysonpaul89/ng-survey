import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ViewerComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    ViewerComponent
  ]
})
export class SurveyViewerModule { }
