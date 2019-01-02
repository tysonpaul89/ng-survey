import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuilderPageComponent } from './builder-page/builder-page.component';
import {
  SurveyBuilderRoutingModule
} from './survey-builder-routing/survey-builder-routing.module';
import {
  SurveyViewerModule
} from '../../shared/modules/survey-viewer/survey-viewer.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [
    BuilderPageComponent,
  ],
  imports: [
    CommonModule,
    SurveyBuilderRoutingModule,
    NgbModule,
    PageHeaderModule,
    SurveyViewerModule
  ]
})
export class SurveyBuilderModule { }
