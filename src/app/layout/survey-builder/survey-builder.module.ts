import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuilderPageComponent } from './builder-page/builder-page.component';
import {
  SurveyBuilderRoutingModule
} from './survey-builder-routing/survey-builder-routing.module';
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
  ]
})
export class SurveyBuilderModule { }
