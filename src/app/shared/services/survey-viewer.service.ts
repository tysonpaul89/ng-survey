import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IElement } from '../interface/ISurvey';

@Injectable()
export class SurveyViewerService {
  private editSurveySource = new Subject<IElement>();
  public editSurvey$ = this.editSurveySource.asObservable();

  constructor() { }

  surveyEditEditClick(element: IElement) {
    this.editSurveySource.next(element)
  }
}
