import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleInputComponent } from './single-input/single-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CommentComponent } from './comment/comment.component';
import { RatingComponent } from './rating/rating.component';
import { SurveyEditModalComponent } from './survey-edit-modal/survey-edit-modal.component';
import { SurveyDeleteModalComponent } from './survey-delete-modal/survey-delete-modal.component';

@NgModule({
  declarations: [
    ViewerComponent,
    SingleInputComponent,
    CheckboxComponent,
    MultipleChoiceComponent,
    DropdownComponent,
    CommentComponent,
    RatingComponent,
    SurveyEditModalComponent,
    SurveyDeleteModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  entryComponents: [
    SurveyEditModalComponent,
    SurveyDeleteModalComponent
  ],
  exports: [
    ViewerComponent
  ]
})
export class SurveyViewerModule { }
